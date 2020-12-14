import React, { useState } from "react";
import styles from "./Search.module.css";
import Selector from "./Selector/Selector";
import useGlobalState from "../../context";

const options = ["all", "income", "expenses"];
const Search = () => {
  const { changeSearchOption } = useGlobalState();

  const [option, setOption] = useState(options[0]);
  const choseOption = newOption => {
    console.log("switched to: ", newOption);
    setOption(newOption);
    changeSearchOption(newOption);
  };
  return (
    <div className={`mainBox ${styles.search}`}>
      <h4>Sort Transactions</h4>
      <Selector choseOption={choseOption} value={option} options={options} />
    </div>
  );
};

export default Search;
