import React, { useState } from "react";
import styles from "./Search.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const selectOptions = {
  default: "all",
  options: ["all", "income", "expenses"],
};
const Search = () => {
  const [option, setOption] = useState(selectOptions.default);
  const [showMenu, setShowMenu] = useState(false);

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
    console.log(e.target.id);
    if (e.target.id === "last") {
      setShowMenu(false);
    }
  };

  return (
    <div className={`mainBox ${styles.search}`}>
      <h4>Filter</h4>
      <div
        className={styles.selector}
        onMouseLeave={closeMenu}
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
