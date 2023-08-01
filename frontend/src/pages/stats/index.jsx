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

export default function Stats() {
    const [isUserLoaded, setUserLoaded] = useState(false);
    const [showSelector, setShowSelector] = useState(false);
    const [showSelectorType, setShowSelectorType] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authStore.isAuthenticated) 
            navigate("/login");
        
        const checkDataLoaded = () => {
            if (!userStore.loading) {
                setUserLoaded(true);
            }
        };

        checkDataLoaded();

        const interval = setInterval(checkDataLoaded, 1);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!isUserLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username}/>
            <Selector/>

            <div className={styles.main}>
                <div className={styles.fullContainer}>
                    <HeaderRow setSelectorType={setShowSelectorType} setShowSelector={setShowSelector}/>
                    <BottemContainer/>
                </div>
            </div>
        </div>
    );
}
