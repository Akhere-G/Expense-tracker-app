import React from "react";
import {
  Balance,
  Search,
  Transactions,
  AddTransaction,
} from "../../components";

import Helmet from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet title='Expense Tracker | home' />

      <h2>Your Expenses</h2>
      <Balance />
      <Search />
      <Transactions />
      <AddTransaction />
    </div>
  );
};

export default Home;
