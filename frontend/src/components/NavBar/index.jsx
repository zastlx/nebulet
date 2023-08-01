import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function NavBar({ authType }) {

    return (
        <div className={styles.header}>
                <Link className={styles.navBarText} to="/">Nebulet</Link>
                {
                    authType ? (
                        <Link className={styles.right} to={"/".concat(authType === "Login" ? "register" : "login")}>{authType === "Login" ? "Register" : "Login"}</Link>
                    ) : ""
                }
        </div>
    );
}

{
    /*
    crazy?
    
    */
}