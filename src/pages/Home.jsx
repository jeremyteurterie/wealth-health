import React from 'react';
// styles
import styles from '../styles/Home.module.css';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import DateInput from '../components/DateInput';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h1>Create Employee</h1>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DateInput name="date-of-birth" />

            <label htmlFor="start-date">Start Date</label>
            <DateInput name="start-date" />

            <fieldset class="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input id="street" type="text" />

              <label htmlFor="city">City</label>
              <input id="city" type="text" />

              <label htmlFor="state">State</label>
              <select name="state" id="state"></select>

              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <select name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </form>
          <button className={styles.button} onclick="saveEmployee()">
            Save
          </button>
        </div>
        <div id="confirmation" class={styles.modal}>
          Employee Created!
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
