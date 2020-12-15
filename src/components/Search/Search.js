import React from "react";
import styles from "./Search.module.css";
import Selector from "./Selector/Selector";
import useGlobalState from "../../context";

const options = ["all", "income", "expenses"];
const Search = () => {
  const {
    changeSearchOption,
    state: { searchOption },
  } = useGlobalState();

  return (
    <div className={`mainBox ${styles.search}`}>
      <h4>Sort Transactions</h4>
      <Selector
        choseOption={changeSearchOption}
        value={searchOption}
        options={options}
      />
    </div>
  );
};

export default Search;
