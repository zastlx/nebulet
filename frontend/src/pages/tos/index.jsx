import NavBar from "../../components/NavBar";
import Background from "../../components/Background";
import styles from "./index.module.css";

export default function Terms() {
    return (
        <div >  
            <NavBar/>
            <Background/>

            <div className={styles.content}>
                <div className={styles.title}>
                    Nebulet Terms of Service
                </div>
                <div>
                    Revised 7/27/2023
                </div>

                <div className={styles.subheader}>
                    Acceptance
                </div>
                <div>
                    By creating any account or other form of a profile on Nebulet, you agree to these terms and all future modifications.
                </div>
            </div>
        </div>
    );
}