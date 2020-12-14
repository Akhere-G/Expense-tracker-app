import React from "react";
import styles from "./Transaction.module.css";
import { Close } from "@material-ui/icons";
const Transaction = ({ id, title, amount, date, deleteTransaction }) => {
  const sign = amount > 0 ? "+" : "-";
  const borderColor = amount > 0 ? styles.plus : styles.negative;
  return (
    <div className={`${styles.transaction} ${borderColor}`}>
      <div className={styles.left}>
        <button
          onClick={() => {
            deleteTransaction(id);
          }}
        >
          <Close fontSize='small' />
        </button>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.center}>
        <p>{date}</p>
      </div>
      <div className={styles.right}>
        <p className={styles.amount}>
          {sign}£{Math.abs(amount)}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
