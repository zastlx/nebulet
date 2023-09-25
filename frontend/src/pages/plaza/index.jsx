import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import withAuth from "../../components/HOCs/withAuth";
import withUserStore from "../../components/HOCs/WithUserStore";

function Plaza() {
    return (
        <div>
            <title>Plaza | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username} />

            <div className={styles.contentContainer}>
                <div className={styles.pageTitle}>Trading Plaza</div>
            </div>
        </div>
    );
}

export default withAuth(withUserStore(Plaza));