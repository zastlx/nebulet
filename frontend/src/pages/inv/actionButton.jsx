import styles from "./styles/actionButton.module.css";

export default function HeaderButton({color, name, img, click}) {

    return (
        <div className={styles.button} onClick={() => {
            click();
        }} role="button">
            <div className={styles.shadow}></div>
            <div
                className={styles.edge}
                style={{
                    backgroundColor: color
                }}
            ></div>
            <div
                className={styles.front}
                style={{
                    backgroundColor: color
                }}
            >
                <div className={styles.buttonContent}>
                    <img className={styles.buttonImg} src={img} />
                    {name}
                </div>
            </div>
        </div>
    );
}