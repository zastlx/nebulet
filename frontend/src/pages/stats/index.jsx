import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./index.module.css";
import HeaderRow from "./headerRow";
import BottemContainer from "./bottemContainer";
import authStore from "../../stores/AuthStore";
import userStore from "../../stores/UserStore";
import TopRightProfile from "../../components/TopRightProfile";
import Selector from "./selector";
import eventManager from "../../services/eventManager";
import blookStore from "../../stores/BlookStore";
import bannerStore from "../../stores/BannerStore";

export default function Stats() {
    const [isUserLoaded, setUserLoaded] = useState(userStore.getLocalUser() !== undefined);
    /* eslint-disable */
    const [showSelector, setShowSelector] = useState(false);
    const [showSelectorType, setShowSelectorType] = useState();
    const [dummy, forceUpdate] = useState();
    /* eslint-enable */
    const navigate = useNavigate();

    useEffect(() => {
        if (!authStore.isAuthenticated) navigate("/login");
         
        if (!blookStore.isInited) blookStore.init();
        if (!bannerStore.isInited) bannerStore.init();
    }, []);

    // event subscriptions
    useEffect(() => {
        const localUserUpdate = () => forceUpdate({});
        const localUserInit = () => setUserLoaded(true);
        const keyPress = (event) => {
            if (event.key === "Escape") setShowSelector(false);
        };
        eventManager.subscribe("LOCAL_USER_UPDATE", localUserUpdate);
        eventManager.subscribe("KEY_PRESS", keyPress);
        eventManager.subscribe("LOCAL_USER_INIT", localUserInit);

        return () => {
            eventManager.unsubscribe("LOCAL_USER_UPDATE", localUserUpdate);
            eventManager.unsubscribe("KEY_PRESS", keyPress);
            eventManager.unsubscribe("LOCAL_USER_INIT", localUserInit);
        };
    }, []);

    return (isUserLoaded ? (<div>
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
        </div>) : (<div>Loading...</div>));
}
