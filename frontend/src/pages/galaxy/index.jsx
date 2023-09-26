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
import { useState, useEffect } from "react";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import logManager from "../../services/logManager";
import blookStore from "../../stores/BlookStore";

function Galaxy() {
    const [instOpen, setInstOpen] = useState(false);

    const planets = packStore.getPacksArray();
    const unlockedPlanets = planets.filter((planet) => userStore.getLocalUser().level >= planet.level).map((planet) => planet.name);

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
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} shards={userStore.getLocalUser().shards} />

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
                                <div className={styles.shardContainer}>
                                    <img src="/content/icons/shard.png" alt="Shard" className={styles.shardIcon} draggable="false"></img>
                                    {planet.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                { /*

                { packOpening && packResult !== "" ?
                    <div className={styles.openContainer}>
                        <div className={styles.openResultContainer}>
                            <img loading="lazy" src={packStore.getPack(packOpening).art} className={styles.openResultArt} />
                            <div className={styles.unlockedBlookContainer}>
                                <img loading="lazy" src={blookStore.getBlook(packResult)?.image} className={styles.unlockedBlook} />
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
                */ }
            </div>
        </div>
    );
}

export default withAuth(withPackStore(withBlookStore(withUserStore(Galaxy))));