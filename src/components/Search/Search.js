import React, { useState } from "react";
import styles from "./Search.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import useGlobalState from "../../context";

const selectOptions = {
  default: "all",
  options: ["all", "income", "expenses"],
};
const Search = () => {
  const [option, setOption] = useState(selectOptions.default);
  const [showMenu, setShowMenu] = useState(false);
  const { changeSearchOption } = useGlobalState();

  const openMenu = () => {
    setShowMenu(true);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleBlur = e => {
    if (e.target.id === "last") {
      setShowMenu(false);
    }
  };

  const choseOption = newOption => {
    console.log("switched to: ", newOption);
    setOption(newOption);
    changeSearchOption(newOption);
    closeMenu();
  };

  return (
    <div className={`mainBox ${styles.search}`}>
      <h4>Filter</h4>
      <div
        className={styles.selector}
        onBlurCapture={e => {
          handleBlur(e);
        }}
      >
        <button className={styles.current} onClick={toggleMenu}>
          <p>{option}</p>
          <KeyboardArrowDownIcon />
        </button>

        <div className={`${styles.dropdown} ${showMenu ? styles.show : ""}`}>
          {selectOptions.options.map((option, index) => {
            return (
              <button
                disabled={!showMenu}
                key={index}
                className={styles.option}
                id={selectOptions.options.length - 1 === index ? "last" : ""}
                onClick={() => choseOption(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
