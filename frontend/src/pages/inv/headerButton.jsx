import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles/headerButton.module.css";

export default function HeaderButton({color, name, icon, click}) {

    return (
        <div className={styles.button} onClick={() => {
            click();
        }} role="button">
            <div className={styles.shadow}></div>
            <div
                className={styles.edge}
                style={{
                    backgroundColor: color
                }}
            ></div>
            <div
                className={styles.front}
                style={{
                    backgroundColor: color
                }}
            >
                <div className={styles.buttonContent}>
                    <FontAwesomeIcon className={styles.buttonIcon} icon={icon} />
                    {name}
                </div>
            </div>
        </div>
    );
}