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

export default function Stats() {
    const [isUserLoaded, setUserLoaded] = useState(false);
    /* eslint-disable */
    const [showSelector, setShowSelector] = useState(false);
    const [showSelectorType, setShowSelectorType] = useState();
    const [dummy, forceUpdate] = useState();
    /* eslint-enable */
    const navigate = useNavigate();

    useEffect(() => {
        if (!authStore.isAuthenticated) 
            navigate("/login");
        
        const checkDataLoaded = () => {
            if (!userStore.loading) setUserLoaded(true);
        };

        checkDataLoaded();
        const interval = setInterval(checkDataLoaded, 1);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // event subscriptions
    useEffect(() => {
        eventManager.subscribe("LOCAL_USER_UPDATE", () => forceUpdate({}));
    });

    if (!isUserLoaded) return <div>Loading...</div>;

    return (
        <div>
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username}/>
            <Selector close={() => setShowSelector(false)}/>

            <div className={styles.main}>
                <div className={styles.fullContainer}>
                    <HeaderRow setSelectorType={setShowSelectorType} setShowSelector={setShowSelector}/>
                    <BottemContainer/>
                </div>
            </div>
        </div>
    );
}
