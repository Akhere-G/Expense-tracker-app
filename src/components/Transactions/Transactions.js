import React from "react";
import Transaction from "./Transaction/Transaction";
const transactions = [
  { id: 1, title: "Apples", cost: -10 },
  { id: 2, title: "bread", cost: -50 },
  { id: 3, title: "paycheck", cost: 50 },
];
const Transactions = () => {
  return (
    <div>
      <h4>Your History</h4>
      <hr />
      <ul>
        {transactions.map(transaction => {
          return <Transaction key={transaction.id} {...transaction} />;
        })}
      </ul>
    </div>
  );
};

export default Transactions;
