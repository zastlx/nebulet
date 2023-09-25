import NavBar from "../../../components/NavBar";
import Background from "../../../components/Background";
import styles from "./index.module.css";
import globalStyles from "../../../components/styles/global.module.css";

export default function Error404() {
    return (
        <div >
            <title>Not Found | Nebulet</title>

            <NavBar/>
            <Background/>

            <div className={styles.mainContainer}>
                <div className={styles.mainContainerHeader}>
                    4
                        <img
                            src="https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/lovelyPlanet.svg"
                            alt="Lovely Planent"
                            draggable="false"
                            className={globalStyles.blook}
                        />
                    4
                </div>
                <div className={styles.mainContainerText}>
                    I don&apos;t know what you were looking for, but this isnt it.<br />
                    <div role="button" className={styles.mainContainerLink} onClick={() => history.back()}><u>Go Back</u></div>
                </div>
            </div>
        </div>
    );
}