import React from "react";
import styles from "./Transaction.module.css";

const Transaction = ({ title, cost }) => {
  const sign = cost > 0 ? "+" : "-";
  const borderColor = cost > 0 ? styles.plus : styles.negative;
  return (
    <div className={styles.transaction}>
      <p className={styles.title}>{title}</p>
      <p className={`${styles.cost} ${borderColor}`}>
        {sign}£{Math.abs(cost)}
      </p>
    </div>
  );
};

export default Transaction;
