import styles from "./styles/StatContainer.module.css";

const StatContainer = ({ title, num, imgSrc }) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.statTitle}>{title}</div>
      <div className={styles.statNum}>{num}</div>
      <img src={imgSrc} alt={title} className={styles.statImg} draggable="false" />
    </div>
  );
};

export default StatContainer;
