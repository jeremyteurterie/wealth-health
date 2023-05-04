import React from 'react';
// styles
import styles from '../styles/Employees.module.css';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Employees = () => {
  return (
    <>
      <Header />
      <main>
        <div id="employee-div" class={styles.container}>
          <h1>Current Employees</h1>
          <table id="employee-table" class={styles.display}></table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Employees;
