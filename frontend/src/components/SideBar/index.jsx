import {Link} from "react-router-dom";
import styles from "./index.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartColumn,
    faScaleBalanced,
    faNewspaper,
    faComment,
    faSuitcase,
    faThumbTack,
    faScrewdriverWrench,
    faCog,
    faSackDollar,
    faTrophy,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {faDiscord, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import SideBarPage from "./page";
import SideBarSocial from "./social";
import {faStars} from "../pirate";
import {useEffect, useState} from "react";

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
                <div className={styles.logoText}>Nebulet</div>
                <SideBarPage name="Stats" to="/stats" icon={faChartColumn}/>
                <SideBarPage name="Leaderboard" to="/leaderboard" icon={faTrophy}/>
                <SideBarPage name="Chat" to="/chat" icon={faComment}/>
                <SideBarPage name="Galaxy" to="/galaxy" icon={faStars}/>
                <SideBarPage name="Blooks" to="/blooks" icon={faSuitcase}/>
                <SideBarPage name="Offers" to="/offers" icon={faThumbTack}/>
                <SideBarPage name="Trading Plaza" to="/plaza" icon={faScaleBalanced}/>
                <SideBarPage name="Staff" to="/panel" icon={faScrewdriverWrench}/>
                <SideBarPage name="Settings" to="/settings" icon={faCog}/>

                <div className={styles.bottomRow}>
                    <SideBarSocial to="https://discord.gg/pBCNFY6jyh" icon={faDiscord}/>
                    <SideBarSocial
                        to="https://www.youtube.com/channel/UCViztqmioa0CoO_n6xgxc-w"
                        icon={faYoutube}/>
                    <SideBarSocial to="https://twitter.com/@notzastix" icon={faTwitter}/>
                    <SideBarSocial icon={faNewspaper}/>
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