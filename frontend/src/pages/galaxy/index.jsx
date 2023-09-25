import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import styles from "./index.module.css";
import packStore from "../../stores/PackStore";
import userStore from "../../stores/UserStore";
import TopRightProfile from "../../components/TopRightProfile";
import withAuth from "../../components/HOCs/withAuth";
import withBlookStore from "../../components/HOCs/withBlookStore";
import withPackStore from "../../components/HOCs/withPackStore";
import withUserStore from "../../components/HOCs/WithUserStore";
import { useState } from "react";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import logManager from "../../services/logManager";
import blookStore from "../../stores/BlookStore";

function Galaxy() {
    const [instOpen, setInstOpen] = useState(false);
    const [packOpening, setPackOpening] = useState(false);
    const [packResult, setPackResult] = useState("");

    const planets = packStore.getPacksArray();
    const unlockedPlanets = planets.filter((planet) => userStore.getLocalUser().level >= planet.level).map((planet) => planet.name);

    async function openPack(pack) {
        const response = await APIManager.post(ENDPOINTS.MARKET.OPEN, { pack });

        const { status, data } = response;
        switch (status) {
            case 200:
                console.log(data);
                setPackOpening(true);
                setPackResult(data);
                break;
            case 401:
                authStore.forceLogout();
                break;
            default:
                logManager.error(status, data);
                break;
        }
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
    
    return (
        <div>
            <title>Galaxy | Nebulet</title>

            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} tokens={userStore.getLocalUser().shards} />

            <div className={styles.main}>
                <div className={styles.pageTitle}>Galaxy</div>
                <div className={styles.rightStore}>
                    <img src="/content/mark.png" alt="Cashier" className={styles.markImage} draggable="false"></img>
                    <img src="/content/store.png" className={styles.storeImage} draggable="false"></img>
                    <div className={styles.instantButton} onClick={() => setInstOpen(!instOpen)} role="button">Instant Open: {instOpen ? "On" : "Off"}</div>
                </div>
                <div className={styles.galaxyContent}>
                    <div className={styles.planets}>
                        {unlockedPlanets.map((planet) => (
                            planet = planets.filter(p => p.name === planet)[0],
                            <div key={planet.name} className={styles.planet} style={{
                                background: planet.background
                            }} role="button" onClick={() => openPack(planet.name)}>
                                <div className={styles.packImageWrapper}>
                                    <img src={planet.image} alt={planet.name} className={styles.packImage} draggable="false"></img>
                                </div>
                                <div className={styles.tokenContainer}>
                                    <img src="/content/icons/shard.png" alt="Shard" className={styles.tokenIcon} draggable="false"></img>
                                    {planet.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                { packOpening ?
                    <div className={styles.openContainer}>
                        <div className={styles.openResultContainer}>
                            <img loading="lazy" src={packStore.getPack(packOpening).art} className={styles.openResultArt} />
                            <div className={styles.unlockedBlookContainer}>
                                <img loading="lazy" src={blookStore.getBlook(packResult).image} className={styles.unlockedBlook} />
                            </div>
                            <div className={styles.unlockedBlookInfo}>
                                <div className={styles.unlockedBlookName} style="font-size: 39px;"><div style="display: block; white-space: nowrap;font-family: Titan One;">{packResult}</div></div>
                                <div className={styles.unlockedBlookRarity} style={{
                                    color: rarityColors[blookStore.getBlook(packResult).rarity]
                                }}>{blookStore.getBlook(packResult).rarity}</div>
                            </div>
                            <div className={styles.unlockedBlookRate}>{blookStore.getBlook(packResult).chance}</div>
                            <div className={styles.unlockedBlookShadow}></div>
                        </div>

                    </div> : ""
                }

                {
                    /*
                    <div id="rqagitnadq" class="styles__openBackground___-U4oX-camelCase" style="background: radial-gradient(circle, #00ccff 0%, #0033cc 100%);">
                <div class="styles__openPackContainer___2m4Yf-camelCase" role="button" tabindex="0">
                <div style="transform: rotate(0deg);">
                    <img loading="lazy" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);min-width: 315px;object-fit: cover;height: 300px;object-position: bottom; margin-top:21px;" src="/content/packs/Aquatic.png">
                    <div class="styles__openPack___3QxCP-camelCase" style="background-image: url('/content/packSeelOpen.png');transform: scale(0.99);"></div>
                    </div>
                </div>
                <div class="styles__openBigButton___3KmDM-camelCase styles__canOpen___2znG2-camelCase" role="button" tabindex="0"></div>
            </div>
                    */
                }
            </div>
        </div>
    );
}

export default withAuth(withPackStore(withBlookStore(withUserStore(Galaxy))));