import React from "react";
import styles from "./Transaction.module.css";
import { Close } from "@material-ui/icons";
const Transaction = ({ id, title, amount, deleteTransaction }) => {
  const sign = amount > 0 ? "+" : "-";
  const borderColor = amount > 0 ? styles.plus : styles.negative;
  return (
    <div className={styles.transaction}>
      <div>
        <button
          onClick={() => {
            deleteTransaction(id);
          }}
        >
          <Close fontSize='small' />
        </button>
        <p className={styles.title}>{title}</p>
      </div>
      <p className={`${styles.amount} ${borderColor}`}>
        {sign}£{Math.abs(amount)}
      </p>
    </div>
  );
};

export default Transaction;
