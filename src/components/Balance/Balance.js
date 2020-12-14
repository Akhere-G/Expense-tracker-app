import React from "react";
import styles from "./Balance.module.css";
import useGlobalState from "../../context";

const Balance = () => {
  const {
    state: { income, expenses, balance },
  } = useGlobalState();
  const sign = balance > 0 ? "+" : "-";
  return (
    <div className={styles.balance}>
      <h3>Your Balance</h3>
      <h2 className={styles.number}>
        {sign}£{Math.abs(balance)}
      </h2>
      <div className={styles.body}>
        <div className={styles.income}>
          <h4>INCOME</h4>
          <p>+£{income}</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.expenses}>
          <h4>EXPENSES</h4>
          <p>-£{Math.abs(expenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
