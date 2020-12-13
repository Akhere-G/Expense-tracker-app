import React from "react";
import styles from "./Home.module.css";
import { Balance, Transactions, AddTransaction } from "../../components";

const Home = () => {
  return (
    <div>
      <Balance />
      <Transactions />
      <AddTransaction />
    </div>
  );
};

export default Home;
