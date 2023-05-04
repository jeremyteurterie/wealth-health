import React from 'react';
// styles
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Wealth Health. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
