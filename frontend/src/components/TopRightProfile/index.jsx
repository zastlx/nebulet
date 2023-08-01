import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function TopRightProfile({ avatar, username })  {
  return (
    <div className={styles.topRightRow}>
      <div className={styles.profileContainer} role="button" tabIndex="0">
        <div className={styles.profileRow}>
          <div className={`${styles.blookContainer} ${styles.profileBlook}`}>
            <img
              src={avatar}
              draggable="false"
              className={styles.blook}
            />
          </div>
          {username}
        </div>
        <FontAwesomeIcon className={styles.profileDropdownIcon} icon={faAngleDown} />
        <div className={styles.profileDropdownMenu}>
          <Link className={styles.profileDropdownOption} to="/settings">
            <FontAwesomeIcon className={styles.profileDropdownOptionIcon} icon={faCog} />
            Settings
          </Link>
          <Link className={styles.profileDropdownOption} to="/logout">
            <FontAwesomeIcon className={styles.profileDropdownOptionIcon} icon={faSignOutAlt} />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}