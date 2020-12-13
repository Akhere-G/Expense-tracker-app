import React from "react";
import styles from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={styles.balance}>
      <h3>Your Balance</h3>
      <h2 className={styles.number}>£0.00</h2>
      <div className={styles.body}>
        <div className={styles.income}>
          <h4>INCOME</h4>
          <p>£0.00</p>{" "}
        </div>
        <div className={styles.separator} />
        <div className={styles.expense}>
          <h4>EXPENSE</h4>
          <p>£0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
