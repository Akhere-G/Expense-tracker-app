import React from "react";
import styles from "./Home.module.css";
import { Balance, Transactions, AddTransaction } from "../../components";

const Home = () => {
  return (
    <div>
      <h2>Your Expenses</h2>
      <Balance />
      <Transactions />
      <AddTransaction />
    </div>
  );
};

export default Home;
