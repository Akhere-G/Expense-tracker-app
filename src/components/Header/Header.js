import React from "react";
import styles from "./Header.module.css";

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const links = ["home", "about", "contact"];
  const { pathname } = useLocation();
  const currentPage = pathname.substring(1);
  console.log(currentPage);
  return (
    <header className={styles.container}>
      <nav className={styles.center}>
        <div className={styles.logo}>
          <Link to='/'>Income Tracker</Link>
        </div>
        <ul className={styles.links}>
          {links.map((link, index) => {
            let isActive = false;
            if (
              currentPage === link ||
              (currentPage === "" && link === "home")
            ) {
              isActive = true;
            }
            return (
              <li
                key={index}
                className={`${styles.link} ${
                  isActive ? styles.activeLink : ""
                }`}
              >
                <Link to={link === "home" ? "/" : link}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
