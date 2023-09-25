import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function HeaderButton({ color, name, icon, type, action }) {
    if (type === "button") return (
        <div className={styles.headerButton} onClick={action} role="button">
            <div className={styles.shadow}></div>
            <div className={styles.edge} style={{
                backgroundColor: color
            }}></div>
            <div className={styles.front} style={{
                backgroundColor: color
            }}>
            <div className={styles.headerButtonInside}>
                <FontAwesomeIcon className={styles.headerButtonIcon} icon={icon} />{name}</div>
            </div>
        </div>
    );
    else if (type === "link") return (
        <Link className={styles.headerButton} to={action}>
            <div className={styles.shadow}></div>
            <div className={styles.edge} style={{
                backgroundColor: color
            }}></div>
            <div className={styles.front} style={{
                backgroundColor: color
            }}>
            <div className={styles.headerButtonInside}>
                <FontAwesomeIcon className={styles.headerButtonIcon} icon={icon} />{name}</div>
            </div>
        </Link>
    );
}