import React from 'react';
import { Link } from 'react-router-dom';
// assets
import logo from '../assets/logo.png';
// styles
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.mainnav}>
        <Link to="/" className={styles.mainnavlogo}>
          <img
            className={styles.mainnavlogoimage}
            src={logo}
            alt="Wealth Health logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
