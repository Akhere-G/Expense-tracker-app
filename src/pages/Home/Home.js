import React from "react";
import {
  Balance,
  Search,
  Transactions,
  AddTransaction,
} from "../../components";

const Home = () => {
  return (
    <div>
      <h2>Your Expenses</h2>
      <Balance />
      <Search />
      <Transactions />
      <AddTransaction />
    </div>
  );
};

export default Home;
