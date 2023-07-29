import { useEffect } from "react";
import styles from "./index.module.css";

export default function Background({ size, homePage}) {
    useEffect(() => {
        document.body.className = homePage ? styles.homeBodyStyle : styles.bodyStyle;
    }, [homePage]);
    
    return (
        <div style={{
            backgroundSize: size ?? null
        }} className={styles.background}></div>
    );
}