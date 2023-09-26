import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import withAuth from "../../components/HOCs/withAuth";
import withUserStore from "../../components/HOCs/WithUserStore";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import logManager from "../../services/logManager";
import { useState, useEffect } from "react";

function Leaderboard() {
    let [ leaderboards, setLeaderboards ] = useState([]);

    useEffect(() => { 
        async function fetchData() {
            const response = await APIManager.get(ENDPOINTS.LEADERBOARDS.URL);
            const { status, data } = response;
            switch (status) {
                case 200:
                    leaderboards = data;
                    setLeaderboards(data);
                    break;
                case 401:
                    authStore.forceLogout();
                    break;
                default:
                    logManager.error(status, data);
                    break;
            }
        }
        fetchData();
    }, []);
    
    return (
        <div>
            <title>Leaderboard | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Leaderboards</div>
                <div className={styles.leaderboards}>
                    <div className={styles.leaderboardColumn}>
                        <div className={styles.leaderboardTitle}>Shards</div>
                        <div className={styles.leaderboardPlaces}>
                            {leaderboards.shards?.map((entry, index) => (
                                <div className={styles.leaderboardEntry} key={Math.round(Math.random() * 1000000).toString()}>
                                    {index < 3 ? <img className={styles.leaderboardIcon} src={
                                        index === 0 ? "https://cdn.discordapp.com/emojis/1087920140416462948.png" :
                                        index === 1 ? "https://cdn.discordapp.com/emojis/1087920234465333349.png" :
                                        "https://cdn.discordapp.com/emojis/1087920301737771099.png"
                                    }></img> : ""}
                                    {entry.username} - {entry.shards.toLocaleString()} <img className={styles.leaderboardIcon} src="/content/icons/shard.png"></img>
                                </div>
                            )) || "Loading..."}
                        </div>
                    </div>
                    <div className={styles.leaderboardColumn}>
                        <div className={styles.leaderboardTitle}>Levels</div>
                        <div className={styles.leaderboardPlaces}>
                            {leaderboards.exp?.map((entry, index) => (
                                <div className={styles.leaderboardEntry} key={Math.round(Math.random() * 1000000).toString()}>
                                    {index < 3 ? <img className={styles.leaderboardIcon} src={
                                        index === 0 ? "https://cdn.discordapp.com/emojis/1087920140416462948.png" :
                                        index === 1 ? "https://cdn.discordapp.com/emojis/1087920234465333349.png" :
                                        "https://cdn.discordapp.com/emojis/1087920301737771099.png"
                                    }></img> : ""}
                                    {entry.username} - {Math.floor(entry.exp / 150).toLocaleString()} <img className={styles.leaderboardIcon} src="/content/icons/levelStar.png"></img>
                                </div>
                            )) || "Loading..."}
                        </div>
                    </div>
                </div>
                <div className={styles.leaderboards}>
                    <div className={styles.leaderboardColumn}>
                        <div className={styles.leaderboardTitle}>Unique Items</div>
                        <div className={styles.leaderboardPlaces}>
                            {leaderboards.uni?.map((entry, index) => (
                                <div className={styles.leaderboardEntry} key={Math.round(Math.random() * 1000000).toString()}>
                                    {index < 3 ? <img className={styles.leaderboardIcon} src={
                                        index === 0 ? "https://cdn.discordapp.com/emojis/1087920140416462948.png" :
                                        index === 1 ? "https://cdn.discordapp.com/emojis/1087920234465333349.png" :
                                        "https://cdn.discordapp.com/emojis/1087920301737771099.png"
                                    }></img> : ""}
                                    {entry.username} - {Object.keys(entry.blooks).length.toLocaleString()} <img className={styles.leaderboardIcon} src="/content/icons/unlocked.png"></img>
                                </div>
                            )) || "Loading..."}
                        </div>
                    </div>
                    <div className={styles.leaderboardColumn}>
                        <div className={styles.leaderboardTitle}>Messages</div>
                        <div className={styles.leaderboardPlaces}>
                            {leaderboards.messages?.map((entry, index) => (
                                <div className={styles.leaderboardEntry} key={Math.round(Math.random() * 1000000).toString()}>
                                    {index < 3 ? <img className={styles.leaderboardIcon} src={
                                        index === 0 ? "https://cdn.discordapp.com/emojis/1087920140416462948.png" :
                                        index === 1 ? "https://cdn.discordapp.com/emojis/1087920234465333349.png" :
                                        "https://cdn.discordapp.com/emojis/1087920301737771099.png"
                                    }></img> : ""}
                                    {entry.username} - {entry.stats.messagesSent.toLocaleString()}
                                </div>
                            )) || "Loading..."}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default withAuth(withUserStore(Leaderboard));