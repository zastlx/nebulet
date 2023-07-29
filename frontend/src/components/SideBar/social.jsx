import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function SideBarSocial({
    icon,
    to
}) {
    return (
        <Link className={styles.bottomLink} to={to}>
            <FontAwesomeIcon className={styles.bottomIcon} icon={icon} />
        </Link>
    );
}