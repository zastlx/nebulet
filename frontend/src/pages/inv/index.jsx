import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import blookStore from "../../stores/BlookStore";
import packStore from "../../stores/PackStore";
import withAuth from "../../components/HOCs/withAuth";
import withPackStore from "../../components/HOCs/withPackStore";
import withBlookStore from "../../components/HOCs/withBlookStore";
import withUserStore from "../../components/HOCs/WithUserStore";
import HeaderButton from "./headerButton";
import ActionButton from "./actionButton";
import { faSearch, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import eventManager from "../../services/eventManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/main";

function Inventory() {
    const [packs, setPacks] = useState(packStore.getPacksArray());
    const [currentBlook, setCurrentBlook] = useState(blookStore.getBlook(userStore.getRandomOwnedBlook() || "astronaut"));
    const [showingPacks, setShowingPacks] = useState(true);

    useEffect(() => {
        if (!userStore.loading) setCurrentBlook(blookStore.getBlook(userStore.getRandomOwnedBlook() || "astronaut"));
    }, []);

    useEffect(() => {
        const upatePacks = (packs) => setPacks(packs);
        const updatCurrentBlook = (user) => setCurrentBlook(blookStore.getBlook(user.getRandomOwnedBlook() || "astronaut"));

        const subs = [
            eventManager.subscribe("PACK_STORE_INIT", upatePacks),
            eventManager.subscribe("PACK_STORE_UPDATE", upatePacks),
            eventManager.subscribe("LOCAL_USER_INIT", updatCurrentBlook)
        ];

        return () => subs.forEach((unsub) => unsub());
    }, []);

    function searchUser(username) {
        let userData = fetchUser(username);
        console.log(userData);
    }

    const rarityColors = {
        "Common": "white",
        "Uncommon": "#4bc22e",
        "Rare": "#0a14fa",
        "Epic": "#be0000",
        "Legendary": "#ff910f",
        "Chroma": "#00ccff",
        "Mystical": "black",
        "Celestial": "black"
    };

    const packBlooks = packStore.getPacksArray().map(a => a.blooks).flat(1).map(a => a.toLowerCase());
    const miscBlooks = Object.keys(blookStore.getBlooks()).filter(a => !packBlooks.includes(a));

    return (
        <>
            <title>Inventory | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Inventory</div>
                <div className={styles.buttonRow}>
                    <HeaderButton color="#4441d9" name="View User Blooks" icon={faSearch} click={() => {
                        return ( <Modal title={"User Search"} inputs={[{
                            placeHolder: "Username",
                            binding: {
                                manual: true,
                                set: false,
                                value: ""
                            }
                        }]} buttons={[{
                            text: "Search",
                            click: (setHidden) => {
                                searchUser()
                                setHidden(true)
                            }
                        }, {
                            text: "Close",
                            click: (setHidden) => setHidden(true)
                        }]} /> );
                    }} />
                    <HeaderButton color="#6464ff" name="Hide Packs" icon={faEyeSlash} onClick={() => setShowingPacks(!showingPacks)} />                    
                </div>

                <div className={styles.blooksContainerBackground}>
                    <div className={styles.blooksContainer}>
                        {packs.map((entry) => {
                            return (
                                <div className={styles.packHolder} key={entry.name}>
                                    <div className={styles.packTop}>
                                        <div className={styles.packTopBg} style={{
                                            backgroundImage: ""
                                        }}></div>
                                        <div className={styles.packName}>{entry.name}</div>
                                        <div className={styles.packTopDivider}></div>
                                    </div>
                                    <div className={styles.packBlooks}>
                                        {entry.blooks.map((item) => {
                                            return (
                                                <div className={styles.outerBlookContainer} key={item} onClick={() => {
                                                    if ((userStore.getLocalUser().blooks[item.toLowerCase()])) setCurrentBlook(blookStore.getBlook(item.toLowerCase()));
                                                }}>
                                                    <div className={`${styles.innerBlookContainer} ${(userStore.getLocalUser().blooks[item.toLowerCase()] ? "" : styles.lockedBlook)}`}>
                                                        <img src={blookStore.getBlook(item.toLowerCase())?.image} className={styles.blookImage} />
                                                    </div>
                                                    {(userStore.getLocalUser().blooks[item.toLowerCase()]) ? <div className={styles.blookQuantity} style={{
                                                        background: rarityColors?.[blookStore.getBlook(item.toLowerCase())?.rarity] || "white"
                                                    }}>{userStore.getLocalUser().blooks[item.toLowerCase()] || "0"}</div> : <FontAwesomeIcon icon={faLock} className={styles.blookLock} />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                        <div className={styles.packHolder} key="Misc">
                            <div className={styles.packTop}>
                                <div className={styles.packTopBg} style={{ backgroundImage: "" }}></div>
                                    <div className={styles.packName}>Misc</div>
                                    <div className={styles.packTopDivider}></div>
                                </div>
                                <div className={styles.packBlooks}>
                                    {miscBlooks.map((item) => {
                                        return (
                                            <div className={styles.outerBlookContainer} key={item} onClick={() => {
                                                if ((userStore.getLocalUser().blooks[item.toLowerCase()])) setCurrentBlook(blookStore.getBlook(item.toLowerCase()));
                                            }}>
                                                <div className={`${styles.innerBlookContainer} ${(userStore.getLocalUser().blooks[item.toLowerCase()] ? "" : styles.lockedBlook)}`}>
                                                    <img src={blookStore.getBlook(item.toLowerCase())?.image} className={styles.blookImage} />
                                                </div>
                                                {(userStore.getLocalUser().blooks[item.toLowerCase()]) ? <div className={styles.blookQuantity} style={{
                                                    background: rarityColors?.[blookStore.getBlook(item.toLowerCase())?.rarity] || "white"
                                                }}>{userStore.getLocalUser().blooks[item.toLowerCase()] || "0"}</div> : <FontAwesomeIcon icon={faLock} className={styles.blookLock} />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className={styles.currentBlookHolder}>
                <img src={currentBlook.backgroundArt} className={styles.currentBackground} alt="Blook Background" />
                <div className={styles.currentInfo}>
                    <div className={styles.currentName}>{currentBlook.displayName}</div>
                    <div className={styles.currentRarity} style={{
                        color: rarityColors?.[currentBlook.rarity] || "white"
                    }}>{currentBlook.rarity}</div>
                </div>
                <div className={styles.currentImageContainer}>
                    <img src={currentBlook.image} className={styles.currentImage} alt="Blook Image" />
                </div>
                <div className={styles.currentOwned}>{userStore.getLocalUser().blooks[currentBlook.name]} Owned</div>
                <div className={styles.currentBottomShadow}></div>
            </div>

            <div className={styles.blookActions}>
                <ActionButton color="#3f1171" name="Sell" img="/content/icons/shard.png"></ActionButton>
            </div>
        </>
    );
}

export default withAuth(withBlookStore(withUserStore(withPackStore((Inventory)))));