import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from '../styles/Error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404: Page not found</h1>
      <p>
        <Link to="/">Back to the home page.</Link>
      </p>
    </div>
  );
};

export default Error;
