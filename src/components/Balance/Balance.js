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
        {sign}£{Math.abs(balance).toFixed(2)}
      </h2>
      <div className={`${styles.body} mainBox`}>
        <div className={styles.income}>
          <h4>INCOME</h4>
          <p>+£{income.toFixed(2)}</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.expenses}>
          <h4>EXPENSES</h4>
          <p>-£{Math.abs(expenses).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
