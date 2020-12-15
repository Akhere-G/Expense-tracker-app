import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./Selector.module.css";
const Selector = ({ value, choseOption, options }) => {
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <div
      className={styles.selector}
      onBlurCapture={e => {
        handleBlur(e);
      }}
    >
      <button className={styles.current} onClick={toggleMenu}>
        <p>{value}</p>
        <KeyboardArrowDownIcon />
      </button>

      <div className={`${styles.dropdown} ${showMenu ? styles.show : ""}`}>
        {options.map((option, index) => {
          return (
            <button
              disabled={!showMenu}
              key={index}
              className={styles.option}
              id={options.length - 1 === index ? "last" : ""}
              onClick={() => {
                choseOption(option);
                closeMenu();
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
