import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Channel({ key, text, icon, styles }) {
    return (
        <div key={key} className={styles.channel}>
            <FontAwesomeIcon
                icon={icon}
                className={styles.channelIcon}/>
                <div className={styles.channelName}>
                    {text}
                </div>
        </div>
    );
}