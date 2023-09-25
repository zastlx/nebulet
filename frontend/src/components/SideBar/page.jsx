import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function SideBarPage({ icon, name, to }) {
    return (
        <Link className={styles.pageLink} to={to || ""}>
            <FontAwesomeIcon className={styles.pageIcon} icon={icon}></FontAwesomeIcon>
            <div className={styles.pageText}>{name}</div>
        </Link>
    );
}