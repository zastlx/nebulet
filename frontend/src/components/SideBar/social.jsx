import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function SideBarSocial({ icon, data, type = "link" }) {
    if (type === "button") return (
        <div className={styles.bottomLink} onClick={data}>
            <FontAwesomeIcon className={styles.bottomIcon} icon={icon} />
        </div>
    );
    else return (
        <Link className={styles.bottomLink} to={data}>
            <FontAwesomeIcon className={styles.bottomIcon} icon={icon} />
        </Link>
    );
}