import styles from "./styles/selector.module.css";
import Blook from "../../components/Blook";

export default function Selector({ type }) {
  return (
    <div className={styles.model}>
      <div className={styles.modalButton} role="button"></div>
      <div className={styles.container}>
        <div className={styles.blooksHolder}>
          <div className={styles.blookContainer} role="button">
            <div
              className={`${styles.blookContainerInside} ${styles.blook}`}
            >
                <Blook src={"https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
