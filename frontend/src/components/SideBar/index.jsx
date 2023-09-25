import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartColumn,
    faScaleBalanced,
    faNewspaper,
    faComment,
    faSuitcase,
    faScrewdriverWrench,
    faCog,
    faSackDollar,
    faTrophy,
    faChevronRight,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SideBarPage from "./page";
import SideBarSocial from "./social";
import { faStars, faClipboardList } from "../pirate";
import { useEffect, useState } from "react";
import userStore from "../../stores/UserStore";

export default function SideBar() {
    const [visible, setVisible] = useState(!window.matchMedia("(max-width: 850px)").matches);
    const [manuallyOpened, setManuallyOpened] = useState(false);
  
    useEffect(() => {
        const resize = () => {
          const isDesktop = !window.matchMedia("(max-width: 850px)").matches;
    
          if (!manuallyOpened && isDesktop !== visible) {
            setVisible(isDesktop);
          }

          if (isDesktop) setManuallyOpened(false);
        };
    
        window.addEventListener("resize", resize);
    
        return () => window.removeEventListener("resize", resize);
      }, [visible, manuallyOpened]);

    return (
        <div>
            {manuallyOpened ? <div onClick={() => {
                setManuallyOpened(false);
                setVisible(false);
            }} className={styles.manOpen}>
  </div> : ""}
            <div className={styles.sidebar} style={
                visible ? {
                    transform: "translateX(0%)"
                } : {
                    transform: "translateX(-100%)"
                }
            }>
                <Link className={styles.logoText} to="/">Nebulet</Link>
                <SideBarPage name="Stats" to="/stats" icon={faChartColumn}/>
                <SideBarPage name="Leaderboard" to="/leaderboard" icon={faTrophy}/>
                <SideBarPage name="Chat" to="/chat" icon={faComment}/>
                <SideBarPage name="Galaxy" to="/galaxy" icon={faStars}/>
                <SideBarPage name="Inventory" to="/inv" icon={faSuitcase}/>
                <SideBarPage name="Quests" to="/quests" icon={faClipboardList}/>
                <SideBarPage name="Trading Plaza" to="/plaza" icon={faScaleBalanced}/>
                {["Helper", "Moderator", "Admin", "Owner"].includes(userStore.getLocalUser().role) ? <SideBarPage name="Panel" to="/panel" icon={faScrewdriverWrench}/> : ""}
                <SideBarPage name="Settings" to="/settings" icon={faCog}/>

                <div className={styles.bottomRow}>
                    <SideBarSocial data="/credits" icon={faUsers}/>
                    <SideBarSocial data="https://discord.gg/nebulet-1063940529739546665" icon={faDiscord}/>
                    <SideBarSocial data="https://www.youtube.com/@nebulet" icon={faYoutube}/>
                    <SideBarSocial icon={faNewspaper} type="button" />
                </div>
                <Link className={styles.storeButton} to="/store">
                    <FontAwesomeIcon className={styles.storeIcon} icon={faSackDollar} />
                    Store
                </Link>
            </div> 
            {visible ? (
        ""
      ) : (
        <div
          onClick={() => {
            setVisible(!visible);
            setManuallyOpened(true);
          }}
          className={styles.topLeftContainer}
        >
          <FontAwesomeIcon className={styles.topIcon} icon={faChevronRight} />
        </div>
      )}
           
        </div>
    );
}