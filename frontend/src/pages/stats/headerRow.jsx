import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import global from "../../components/styles/global.module.css";
import { useMemo } from "react";
import Blook from "../../components/Blook";
import HeaderButton from "./headerButton";
import { calcLevelFromXP, calcXPFromLevel } from "../../utils/exp";
import { faSearch, faComment, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function HeaderRow({ setShowSelector, setSelectorType }) {
    const currentXP = userStore.getLocalUser().exp;
    const requiredXPForCurrentLevel = calcXPFromLevel(calcLevelFromXP(currentXP));
    const requiredXPForNextLevel = calcXPFromLevel(calcLevelFromXP(currentXP) + 1);

    const scaleXValue = useMemo(() => {
        const progressInCurrentLevel = currentXP - requiredXPForCurrentLevel;
        return progressInCurrentLevel / (requiredXPForNextLevel - requiredXPForCurrentLevel);
    }, [currentXP, requiredXPForCurrentLevel, requiredXPForNextLevel]);

    return (
        <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
                <div className={styles.headerLeftRow}>
                    <div onClick={() => {
                                    setShowSelector(true);
                                    setSelectorType(1); // blook
                                }} className={styles.headerBlookContainer} role="button">
                        <div className={global.blookContainer}>
                            <Blook
                                customClass={styles.blook}
                                src={userStore.getLocalUser().avatar}/>
                        </div>

                    </div>
                    <div className={styles.headerInfo}>
                        <div className={styles.headerBanner} role="button">
                            <img
                                onClick={() => {
                                    setShowSelector(true);
                                    setSelectorType(2); // banner
                                }}
                                src={userStore.getLocalUser().banner}
                                alt="Banner"
                                className={styles.headerBannerBackground}
                                draggable="false"/>
                            <div className={styles.headerBannerName}>
                                {userStore.getLocalUser().username}
                            </div>
                            <div className={styles.headerBannerRole}>
                                {userStore.getLocalUser().role}
                            </div>
                        </div>
                        <div className={styles.levelBarContainer}>
                            <div className={styles.levelBar}>
                                <div
                                    className={styles.levelBarInside}
                                    style={{
                                    transform: `scaleX(${scaleXValue})`
                                }}></div>
                            </div>
                            <div className={styles.levelBarStarContainer}>
                                <img
                                    src="/content/icons/levelStar.png"
                                    alt="Star"
                                    className={styles.levelStar}
                                    draggable="false"/>
                                <div className={styles.levelStarText}>
                                    {calcLevelFromXP(userStore.getLocalUser().exp)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.headerLeftButtons}>
                    <HeaderButton color="#4441d9" name="View Stats" icon={faSearch}/>
                    <HeaderButton color="rgb(100,100,255)" name="Chat" icon={faComment}/>
                    <HeaderButton color="#4997eb" name="Trade" icon={faHandshake}/>
                </div>
            </div>
        </div>
    );
}