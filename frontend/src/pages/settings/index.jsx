import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import withAuth from "../../components/HOCs/withAuth";
import withUserStore from "../../components/HOCs/WithUserStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPencil, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function Settings() {    
    return (
        <div>
            <title>Settings | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Settings</div>
                <div className={styles.settingsContainer}>
                    <div className={styles.settingBox}>
                        <div className={styles.settingHeader}>
                            <FontAwesomeIcon icon={faUser} className={styles.settingIcon}></FontAwesomeIcon>
                            <div className={styles.settingTitle}>Profile</div>
                        </div>
                        <div className={styles.settingText}><b>Username:</b> {userStore.getLocalUser().username}</div>
                        <div className={styles.settingText}><b>Role:</b> {userStore.getLocalUser().role}</div>
                        <div className={styles.settingText}><b>Joined:</b> {new Date(userStore.getLocalUser().created).toUTCString()}</div>
                        <div className={styles.settingText}><b>Plan:</b> Basic</div>
                    </div>
                    { userStore.getLocalUser().discord ? 
                        <div className={styles.settingBox}>
                            <div className={styles.settingHeader}>
                                <FontAwesomeIcon icon={faDiscord} className={styles.settingIcon}></FontAwesomeIcon>
                                <div className={styles.settingTitle}>Discord</div>
                            </div>
                            <div className={styles.settingText}><b>ID:</b> {userStore.getLocalUser().discord}</div>
                            <div className={styles.settingLink}>Enable 2FA</div>
                            <div className={styles.settingLink}>Unlink</div>
                        </div> : <div className={styles.settingBox}>
                            <div className={styles.settingHeader}>
                                <FontAwesomeIcon icon={faDiscord} className={styles.settingIcon}></FontAwesomeIcon>
                                <div className={styles.settingTitle}>Discord</div>
                            </div>
                            <div className={styles.settingLink}>Link</div>
                        </div>
                    }
                    <div className={styles.settingBox}>
                        <div className={styles.settingHeader}>
                            <FontAwesomeIcon icon={faPencil} className={styles.settingIcon}></FontAwesomeIcon>
                            <div className={styles.settingTitle}>Account</div>
                        </div>
                        <div className={styles.settingLink}>Change Username</div>
                        <div className={styles.settingLink}>Change Password</div>
                    </div>
                    <div className={styles.settingBox}>
                        <div className={styles.settingHeader}>
                            <FontAwesomeIcon icon={faPalette} className={styles.settingIcon}></FontAwesomeIcon>
                            <div className={styles.settingTitle}>Themes</div>
                        </div>
                        <div className={styles.settingLink}>Manage Themes</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(withUserStore(Settings));