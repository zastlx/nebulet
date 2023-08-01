import blookStore from "../../stores/BlookStore";
import global from "../styles/global.module.css";

export default function blook({ _src, blookName, customClass, onClick = null }) {
    return (
        <img
            src={_src ?? blookStore.getBlook(blookName)?.image}
            alt={blookStore.getBlook(blookName)?.displayName}
            draggable="false"
            onClick={onClick}
            className={customClass ?? global.blook}
        />
    );
}