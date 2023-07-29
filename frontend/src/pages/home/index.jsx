
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import Background from "../../components/Background";
import styles from "./index.module.css";
import globalStyles from "../../components/styles/global.module.css";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div >  
            <Background size={"70%"} homePage={true}/>

            <div className={styles.headerSide}></div>
            <div className={styles.headerContainer}>

                <div className={styles.topHeaderContainer}>
                    <div className={styles.logoText}>
                        Nebulet
                    </div>
                </div>

                <div className={styles.welcomeContainer}>
                    <div className={styles.welcomeText}>
                        Space
                        <br/>
                        Themed
                        <br/>
                        Blooket
                    </div>
                    <div className={styles.welcomeDesc}>
                        Nebulet is the next Blooket Private Server,<br/>
                        Allowing you to explore endless possibilities in space!
                    </div>
                    <Link className={styles.welcomeBtn} to="/register">
                        Blast off!
                    </Link>

                    <div
                        onClick={() => {
                            (new Audio("/content/pronun.mp3")).play();
                        }}
                        className={styles.pronounceButton} role="button">
                        <FontAwesomeIcon icon={faVolumeUp} />
                        &nbsp; Pronunciation (&quot;Neb-you-let&quot;)
                    </div>
                </div>
            </div>

            <div className={styles.topButtons}>
                <Link to="/login" className={globalStyles.button.concat(" " + styles.btn)}>
                    Login
                </Link>
                <Link to="/register" className={globalStyles.button.concat(" " + styles.btn)}>
                    Register
                </Link>
            </div>
        </div>
    );
}