import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

export default function HeaderButton({color, name, icon}) {

    return (
        <div className={styles.headerButton} role="button">
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
                <div className={styles.headerButtonInside}>
                    <FontAwesomeIcon className={styles.headerButtonIcon} icon={icon} />
                    {name}
                </div>
            </div>
        </div>
    );
}