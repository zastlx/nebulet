import channelStore from "../../stores/ChannelStore";
import { faCalendar, faComment, faComments, faDollarSign, faGear, faHandshake, faHashtag, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Channel from "./channel";

function HeaderText({ styles, text, style }) {

    return (
        <div style={style} className={styles.channelSelectorHeaderContainer}>
            <div className={styles.channelSelectorHeaderText}>{text}</div>
        </div>
    );
}


export default function ChannelSelector({ styles }) {
    return (
        <div className={styles.channelSelectorContainer}>
            <div className={styles.channelSelector}>
                <HeaderText styles={styles} text="Channels"/>
                <div className={styles.channelsContainer}>
                    <div className={styles.channelsHolder}>
                        {channelStore.getRawChannels().filter((channel) => (channel.type === 1 || channel.type === 2 || channel.type === 5)).map((channel, _) => {
                            return (
                                <Channel 
                                    key={_}
                                    styles={styles}
                                    icon={channel.id === "0" ? faComment : (channel.id === "1" ? faDollarSign : (channel.id === "2" ? faHandshake : (channel.id === "3" ? faGear : (channel.id === "4" ? faCalendar : (channel.id === "4" ? faScrewdriverWrench : faHashtag)))))}
                                    text={channel.name}
                                />
                            );
                        })}
                    </div>
                </div>
                <HeaderText style={{
                    top: "50%"
                }} styles={styles} text="DMs/GCs"/>
                <div className={styles.dmsContainer}>
                    {channelStore.getRawChannels().filter((channel) => (channel.type === 4 || channel.type === 3)).map((channel, _) => {
                        return (
                            <Channel
                                key={_}
                                styles={styles}
                                icon={channel.type === 3 ? faHashtag : faComments}
                                text={channel.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}