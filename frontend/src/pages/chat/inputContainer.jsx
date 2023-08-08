import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFaceGrimace,
    faFaceGrin,
    faFaceGrinBeamSweat,
    faFaceGrinTears,
    faFaceGrinTongue,
    faFaceGrinWink,
    faFaceKissWinkHeart,
    faFaceLaughWink,
    faFaceMeh,
    faFaceRollingEyes,
    faFaceSadCry,
    faFaceSadTear,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
const icons = [
    faFaceSadCry,
    faFaceRollingEyes,
    faFaceSadTear,
    faFaceKissWinkHeart,
    faFaceMeh,
    faFaceLaughWink,
    faFaceGrinWink,
    faFaceGrimace,
    faFaceGrin,
    faFaceGrinBeamSweat,
    faFaceGrinTongue,
    faFaceGrinTears
];

export default function InputContainer({styles}) {
    return (
        <div className={styles.chatInputContainer}>
            <div className={styles.chatInputButton}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            <div
                className={styles.chatInputButton}
                style={{
                right: "0",
                left: "auto"
            }}>
                <FontAwesomeIcon icon={icons[Math.floor(Math.random() * icons.length)]}/>
            </div>
            <input className={styles.chatInput} placeholder="Message"></input>
        </div>
    );
}