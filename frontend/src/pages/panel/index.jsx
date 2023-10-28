import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import authStore from "../../stores/AuthStore";
import userStore from "../../stores/UserStore";
import withAuth from "../../components/HOCs/withAuth";
import withUserStore from "../../components/HOCs/WithUserStore";
import * as FontAwesomeIcons from "@fortawesome/free-solid-svg-icons";
import PanelButton from "./panelButton";
import { useState, useEffect } from "react";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";

function Panel() {
    let [ pages, setPages ] = useState([]);
    const navigate = useNavigate();

    let allowedRoles = ["Helper", "Moderator", "Admin", "Owner"];
    if (!allowedRoles.includes(userStore.getLocalUser().role)) navigate("/stats");

    useEffect(() => { 
        async function fetchData() {
            const response = await APIManager.get(ENDPOINTS.PANEL.PAGES);
            const { status, data } = response;
            switch (status) {
                case 200:
                    pages = data;
                    setPages(data);
                    break;
                case 401:
                    navigate("/stats");
                    break;
                default:
                    authStore.forceLogout();
                    navigate("/logout");
                    break;
            }
        }
        fetchData();
    }, []);

    let phrases = [
        "Who will you ban today?",
        "Are you just peeking around?",
        "If you have more than 5 buttons below, you're cool.",
        "This message was coded in at 9/9/23 at 6:15PM EST.",
        "I'm low on ideas on what to put here."
    ];

    let hexes = ["#4441d9", "#6464ff", "#4997eb"];

    return (
        <div>
            <title>Panel | Nebulet</title>

            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Panel</div>
                <div className={styles.welcomeText}>Welcome to the panel, {userStore.getLocalUser().username}!</div>
                <div className={styles.quoteText}>╰  {phrases[phrases.length * Math.random() | 0]}</div>
                
                <div className={styles.panelButtons}>
                    {pages?.map((page) => {
                        return (<PanelButton color={hexes[hexes.length * Math.random() | 0]} name={page.name} icon={FontAwesomeIcons[page.icon]} key={page.name} />);
                    }) || "Loading..."}
                </div>
            </div>
        </div>
    );
}

export default withAuth(withUserStore(Panel));