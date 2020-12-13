import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.center}>
        <div className={styles.logo}>
          <h4>Income Tracker</h4>
        </div>
        <ul className={styles.links}>
          <li>
            <Link to='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
