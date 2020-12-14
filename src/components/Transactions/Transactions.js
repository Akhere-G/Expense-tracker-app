import React from "react";
import Transaction from "./Transaction/Transaction";
import useGlobalState from "../../context";
import styles from "./Transactions.module.css";

const Transactions = () => {
  const {
    state: { searchItems },
    deleteTransaction,
  } = useGlobalState();

  console.log(useGlobalState());

  const transactions = searchItems;
  if (transactions < 1) {
    return (
      <div>
        <h4>Your History</h4>
        <hr />
        <h2 className={styles.title}>No transactions</h2>
      </div>
    );
  }
  return (
    <div>
      <h4>Your History</h4>
      <hr />
      <ul>
        {transactions.map(transaction => {
          return (
            <Transaction
              key={transaction.id}
              {...transaction}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Transactions;
