import userStore from "../../stores/UserStore";
import styles from "./styles/HistoryItem.module.css";

const HistoryItem = ({ expeditionName, rewards }) => {
  return (
    <div className={styles.historyGameContainer}>
      <div className={`${styles.blookContainer} ${styles.historyBlook}`}>
        <img src={userStore.getLocalUser().avatar} draggable="false" className={styles.blook} />
      </div>
      <div className={styles.historyInfo}>
        <div className={styles.historyName}>{userStore.getLocalUser().username}</div>
        <div>{expeditionName}</div>
      </div>
      <div className={styles.gameStatContainer}>
        <div className={styles.gameStatText}>{rewards}</div>
        <img src="" draggable="false" />
      </div>
    </div>
  );
};

export default HistoryItem;
