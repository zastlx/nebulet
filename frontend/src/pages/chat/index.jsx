import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import withAuth from "../../components/HOCs/withAuth";
import withChannelStore from "../../components/HOCs/withChannelStore";
import userStore from "../../stores/UserStore";
import channelStore from "../../stores/ChannelStore";
import TopRightProfile from "../../components/TopRightProfile";
import withUserStore from "../../components/HOCs/WithUserStore";
import styles from "./index.module.css";
import InputContainer from "./inputContainer";
import ChannelSelector from "./channelSelector";

function Chat() {
    return (
        <div>
            <title>Chat | Nebulet</title>
            
            <SideBar/>
            <Background/>
            <TopRightProfile avatar={userStore.getLocalUser().avatar} username={userStore.getLocalUser().username}/>

            <div className={styles.mainContainer}>
                <div className={styles.channelNameBRPYAY}>{channelStore.getCurrentChannel()?.name || "#general"}</div>
                <div className={styles.chatContainer}></div>
                <InputContainer styles={styles} />
            </div>
            <ChannelSelector styles={styles} />
        </div>
    );
}

export default withAuth(withUserStore(withChannelStore(Chat)));