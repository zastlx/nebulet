import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import withAuth from "../../components/HOCs/withAuth";
import withUserStore from "../../components/HOCs/WithUserStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Plaza() {
    return (
        <div>
            <title>Plaza | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} shards={userStore.getLocalUser().shards} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Trading Plaza</div>

                <div className={styles.innerContainer}>
                    <div className={styles.leftColumn}>
                        <div className={styles.sendTradeContainer}>
                            <input placeholder="Username..." className={styles.sendTradeInput} maxLength={16} />
                            <div className={styles.sendTradeButton}>Send Trade Request</div>
                        </div>

                        <div className={styles.dailyLeaderboard}>
                            <div className={styles.textHeader}>Daily Leaderboard</div>
                            <div className={styles.leaderboardEntries}>
                                <div className={styles.textBody}>[ 1 ] Xotic</div>
                                <div className={styles.textBody}>[ 2 ] zastix</div>
                                <div className={styles.textBody}>[ 3 ] monkxy</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <input className={styles.offerSearch} placeholder="Search for an item..." />

                        <div className={styles.newOffers}>
                            <div className={styles.textHeader}>Recent Offers</div>
                            <div className={styles.offerList}>
                                <div className={styles.offer}>
                                    <img src="https://nebulet.zastix.club/content/blooks/astronaut.png" className={styles.offerImage} />
                                    <div className={styles.offerContent}>
                                        <div className={styles.offerName}>Astronaut</div>
                                        <div className={styles.offerDetails}>
                                            <FontAwesomeIcon icon={faUser} className={styles.offerIcon} />
                                            <div className={styles.offerSeller}>Death</div>
                                            <img src="/content/icons/shard.png" className={styles.offerIconImage} />
                                            <div className={styles.offerCost}>1,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.offer}>
                                    <img src="https://nebulet.zastix.club/content/blooks/astronaut.png" className={styles.offerImage} />
                                    <div className={styles.offerContent}>
                                        <div className={styles.offerName}>Astronaut</div>
                                        <div className={styles.offerDetails}>
                                            <FontAwesomeIcon icon={faUser} className={styles.offerIcon} />
                                            <div className={styles.offerSeller}>Death</div>
                                            <img src="/content/icons/shard.png" className={styles.offerIconImage} />
                                            <div className={styles.offerCost}>1,000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.myOffers}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(withUserStore(Plaza));