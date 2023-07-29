import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function NavBar() {

    return (
        <div className={styles.header}>
                <Link className={styles.navBarText} to="/">Nebulet</Link>
        </div>
    );
}