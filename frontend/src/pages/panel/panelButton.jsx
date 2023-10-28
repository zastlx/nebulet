import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles/actionButton.module.css";
import { Link } from "react-router-dom";

export default function PanelButton({ color, name, icon, link }) {
    return (
        <Link className={styles.button} to={link} role="button">
            <div className={styles.shadow}></div>
            <div className={styles.edge} style={{ backgroundColor: color }}></div>
            <div className={styles.front} style={{ backgroundColor: color }}>
                <div className={styles.buttonContent}>
                    <FontAwesomeIcon className={styles.buttonIcon} icon={icon} /> {name}
                </div>
            </div>
        </Link>
    );
}