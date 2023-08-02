import styles from "./styles/BottemConatiner.module.css";
import StatContainer from "./statContainer";
import HistoryItem from "./historyItem";
import userStore from "../../stores/UserStore";

export default function BottemContainer() {
    return (
    <div className={styles.bottomContainer}>
      <div className={styles.right}>
        <div className={styles.statsContainer}>
          <div className={styles.containerHeader}>
            <div className={styles.containerHeaderInside}>Stats</div>
          </div>
          <div className={styles.statsWrapper}>
            <StatContainer
              title="Shards"
              num={userStore.getLocalUser().shards}
              imgSrc="/content/icons/shard.png"
            /> 
            <StatContainer
              title="Blooks Unlocked"
              num={Object.keys(userStore.getLocalUser().blooks).filter(blookName => userStore.getLocalUser().blooks[blookName] >= 1).length}
              imgSrc="/content/icons/unlocked.png"
            />
            <StatContainer
              title="Messages Sent" /* {
                "expeditions": 0,
                "messagesSent": 0,
                "uniqueBlooks": 0,
                "completedTrades": 0,
                "succesfulOffers": 0
            }
            */
              num={userStore.getLocalUser().stats.messagesSent}
              imgSrc="https://cdn.discordapp.com/attachments/1132777741889056900/1134493913139392583/chat.png"
            />
            <StatContainer
              title="Completed Trades"
              num={userStore.getLocalUser().stats.messagesSent}
              imgSrc="https://cdn.discordapp.com/attachments/1132777741889056900/1134493913139392583/chat.png"
            />
            <StatContainer
              title="Successful Offers"
              num={userStore.getLocalUser().stats.succesfulOffers}
              imgSrc="/content/icons/check.png"
            />
            <StatContainer
              title="Completed Expeditions"
              num={userStore.getLocalUser().expeditions.length}
              imgSrc="https://cdn.discordapp.com/attachments/1132777741889056900/1134493913139392583/chat.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.historyContainer}>
          <div className={styles.containerHeader}>
            <div className={styles.containerHeaderInside}>History</div>
          </div>
          {userStore.getLocalUser().expeditions.map((expedition, _) => {
                return (<HistoryItem key={_} expeditionName={expedition.name} rewards={expedition.rewards} />);
          })}
        </div>
      </div>
    </div>
    );
}