import React from 'react';
// styles
import styles from '../styles/Footer.module.css';

/**
 * Footer component.
 * Renders the footer section of the website.
 *
 * @component
 * @returns {JSX.Element} The rendered JSX element for the footer.
 */
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
