import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import global from "../../components/styles/global.module.css";
import Blook from "../../components/Blook";
import HeaderButton from "./headerButton";
import { faSearch, faComment, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/main";

export default function HeaderRow({ setShowSelector, setSelectorType, states }) {
    const [ user, setUser ] = states;

    return (
        <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
                <div className={styles.headerLeftRow}>
                    <div onClick={() => {
                        if (user.isLocal()) return ( <Modal title={"Error"} desc={"You must be viewing your own profile to set your Blook."} buttons={[{
                            text: "Close",
                            click: (setHidden) => setHidden(true)
                        }]} /> );
                        setSelectorType("blook");
                        setShowSelector(true);
                    }} className={styles.headerBlookContainer} role="button">
                        <div className={global.blookContainer}>
                            <Blook
                                customClass={styles.blook}
                                _src={userStore.getLocalUser().avatar}/>
                        </div>
                    </div>
                    <div className={styles.headerInfo}>
                        <div
                            onClick={() => {
                                setSelectorType("banner"); // banner
                                setShowSelector(true);
                            }}
                            className={styles.headerBanner} role="button">
                            <img
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
                                    transform: `scaleX(${(userStore.getLocalUser().exp % 150)/150})`
                                }}></div>
                            </div>
                            <div className={styles.levelBarStarContainer}>
                                <img
                                    src="/content/icons/levelStar.png"
                                    alt="Star"
                                    className={styles.levelStar}
                                    draggable="false"/>
                                <div className={styles.levelStarText}>
                                    {userStore.getLocalUser().level}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.headerLeftButtons}>
                    <HeaderButton color="#4441d9" name="View Stats" icon={faSearch} type="button" action={() => {
                        <Modal title={"View Stats"} inputs={[
                            {
                                placeHolder: "Username",
                                binding: {
                                    manual: false,
                                    set: setUser,
                                    value: ""
                                }
                            }
                        ]} buttons={[{
                            text: "View",
                            click: (setHidden) => {
                                setHidden(true);
                            }
                        }, {
                            text: "Close",
                            click: (setHidden) => setHidden(true)
                        }]} />;
                    }}/>
                    <HeaderButton color="rgb(100,100,255)" name="Chat" icon={faComment} type="link" action="/chat" />
                    <HeaderButton color="#4997eb" name="Trade" icon={faHandshake} type="link" action="/plaza" />
                </div>
            </div>
        </div>
    );
}