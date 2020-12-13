import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
