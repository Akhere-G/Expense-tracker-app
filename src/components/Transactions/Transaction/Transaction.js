import React from "react";
import styles from "./Transaction.module.css";

const Transaction = ({ title, amount }) => {
  const sign = amount > 0 ? "+" : "-";
  const borderColor = amount > 0 ? styles.plus : styles.negative;
  return (
    <div className={styles.transaction}>
      <p className={styles.title}>{title}</p>
      <p className={`${styles.amount} ${borderColor}`}>
        {sign}£{Math.abs(amount)}
      </p>
    </div>
  );
};

export default Transaction;
