import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import {useEffect, useState} from "react";
import styles from "./index.module.css";
import HeaderRow from "./headerRow";
import BottemContainer from "./bottemContainer";
import userStore from "../../stores/UserStore";
import TopRightProfile from "../../components/TopRightProfile";
import Selector from "./selector";
import eventManager from "../../services/eventManager";
import withAuth from "../../components/HOCs/withAuth";
import withBannerStore from "../../components/HOCs/withBannerStore";
import withBlookStore from "../../components/HOCs/withBlookStore";
import withUserStore from "../../components/HOCs/WithUserStore";

function Stats() {
    const [showSelector, setShowSelector] = useState(false);
    const [showSelectorType, setShowSelectorType] = useState();

    // event subscriptions
    useEffect(() => {
        const subs = [eventManager.subscribe("KEY_PRESS", (event) => {
            if (event.key === "Escape") setShowSelector(false);
        })];

        return () => subs.forEach((unsub) => unsub());
    }, []);

    return (<div>
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username}/>
            {showSelector &&  <Selector type={showSelectorType} close={() => setShowSelector(false)}/>}

            <div className={styles.main}>
                <div className={styles.fullContainer}>
                    <HeaderRow setSelectorType={setShowSelectorType} setShowSelector={setShowSelector}/>
                    <BottemContainer/>
                </div>
            </div>
        </div>);
}

export default withAuth(withBannerStore(withBlookStore(withUserStore(Stats))));