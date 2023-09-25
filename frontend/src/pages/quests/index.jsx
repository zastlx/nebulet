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

function Quests() {
    let [ quests, setQuests ] = useState([]);

    useEffect(() => { 
        async function fetchData() {
            const response = await APIManager.get(ENDPOINTS.QUESTS.GET);
            const { status, data } = response;
            switch (status) {
                case 200:
                    quests = data;
                    setQuests(data);
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
            <title>Quests | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Quests</div>
                <div className={styles.questContainer}>
                    <div className={styles.questColumn}>
                        <div className={styles.questType}>Daily</div>
                        <div className={styles.questInfo}>{quests?.resets?.daily || "Loading..."}</div>
                        <div className={styles.questListContainer}>
                            {quests?.daily?.map((entry) => (
                                <div className={styles.questEntry} key={Math.round(Math.random() * 1000000).toString()}>
                                    [{entry.type.toUpperCase()}] {entry.name}
                                </div>
                            )) || "Loading..."}
                        </div>
                    </div>
                    <div className={styles.questColumn}>
                        <div className={styles.questType}>Weekly</div>
                        <div className={styles.questInfo}>{quests?.resets?.weekly || "Loading..."}</div>
                        <div className={styles.questListContainer}>
                            {quests?.daily?.map((entry) => (
                                <div className={styles.questEntry} key={Math.round(Math.random() * 1000000).toString()}>
                                    [{entry.type.toUpperCase()}] {entry.name}
                                </div>
                            )) || "Loading..."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(withUserStore(Quests));