import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.center}>
        <div className={styles.logo}>
          <Link to='/'>Income Tracker</Link>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.link}>
            <Link to='/about'>About</Link>
          </li>
          <li className={styles.link}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
