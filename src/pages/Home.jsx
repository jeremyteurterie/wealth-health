import React, { useState } from 'react';
// styles
import styles from '../styles/Home.module.css';
// data
import dataStates from '../data/states';
import { setUsersData } from '../slices/employees.slice';
import { useDispatch, useSelector } from 'react-redux';
// modal component
import { Modal } from 'modal-component-wealth-health-jt7';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';

let userTab = [];
const Home = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [startDate, setStartDate] = useState();
  const [department, setDepartment] = useState();
  const [birth, setBirth] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipCode, setZipCode] = useState();

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModal(true);
    let user = {
      firstName: firstName,
      lastName: lastName,
      startDate: startDate,
      department: department,
      birth: birth,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    };

    // Sending data in an array
    userTab = Object.assign([], userTab);
    userTab.push(user);

    // dispatch(setUsersData(userTab));
    // dispatch(setUsersData([...users, newUser]));
    dispatch(setUsersData(user));
  };

  return (
    <>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.container}>
          <h1>Create Employee</h1>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">
              First Name
              <input
                type="text"
                name="firstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label htmlFor="last-name">
              Last Name
              <input
                type="text"
                name="lastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label htmlFor="date-of-birth">
              Date of Birth
              <input
                type="date"
                name="firstName"
                required
                onChange={(e) => setBirth(e.target.value)}
              />
            </label>

            <label htmlFor="start-date">
              Start Date
              <input
                type="date"
                name="firstName"
                required
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">
                Street
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={(e) => setStreet(e.target.value)}
                />
              </label>

              <label htmlFor="city">
                City
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              <label htmlFor="state">
                State
                <select name="State" onChange={(e) => setState(e.target.value)}>
                  {dataStates.map((item, id) => (
                    <option key={id}>{item.name}</option>
                  ))}
                </select>
              </label>

              <label htmlFor="zip-code">
                Zip Code
                <input
                  type="number"
                  name="firstName"
                  required
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </label>
            </fieldset>

            <label htmlFor="department">Department</label>
            <select
              name="department"
              required
              onChange={(e) => setDepartment(e.target.value)}
              pattern="Marketing | Engineering"
            >
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
            <input
              type="submit"
              value="Save"
              className={styles.button}
              onClick={(e) => handleFormSubmit(e)}
            />
          </form>
        </div>
      </main>
      {modal && <Modal trigger={modal} setTrigger={setModal} />}
      <Footer />
    </>
  );
};

export default Home;
