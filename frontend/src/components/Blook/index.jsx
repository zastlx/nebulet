import global from "../styles/global.module.css";

export default function blook({ src, customClass }) {
    return (
        <img
            src={src}
            alt="Blook"
            draggable="false"
            className={customClass ?? global.blook}
        />
    );
}