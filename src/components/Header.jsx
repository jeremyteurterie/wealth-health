import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.headerlimiter}>
        <Link to="/">
          <h1>HRnet</h1>
        </Link>
      </div>
      <div className={styles.button}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/employees">
          <button>Employees</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
