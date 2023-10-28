import { useState } from "react";
import styles from "./index.module.css";

export default ({title, desc, buttons, inputs = []}) => {
    const [hidden, setHidden] = useState(false);
    if (hidden) return (<></>);

    return (
        <div className={styles.modal}>
            <div className={styles.modal2}>
                <div className={styles.modalHeader}>{title}</div>
                <div className={styles.modalDesc}>{desc}</div>
                <div className={styles.modalItems}>
                    {inputs.map((b, _) => {
                        return (<input key={_} placeholder={b.placeHolder} value={b.binding.value} onChange={b.binding?.manual ? b.binding.set : (e) => b.binding.set(e.target.value)} className={styles.modalInput}/>);
                    })}
                    <div className={styles.modalButtons}>
                        {buttons.map((a, _) => {
                            return (<div key={_} onClick={() => a.click(setHidden)} className={styles.modalButton}>{a.text}</div>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};