import React from 'react';
// styles
import styles from '../styles/Error.module.css';

/**
 * Error component.
 * Renders the error page for a 404 - Page not found error.
 *
 * @component
 * @returns {JSX.Element} The rendered JSX element for the error page.
 */
const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404 : Page not found</h1>
    </div>
  );
};

export default Error;
