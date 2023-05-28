import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'modal-component-wealth-health-jeremyteurterie';
// redux
import { setUsersData } from '../slices/employees.slice';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// data
import dataStates from '../data/states';
// styles
import styles from '../styles/Home.module.css';

/**
 * Home component.
 * Renders the home page for creating an employee.
 *
 * @component
 * @returns {JSX.Element} The rendered JSX element for the home page.
 */
const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    birth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  /**
   * Handles input change in the form fields.
   *
   * @param {Event} event - The change event triggered by the input field.
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  /**
   * Handles form submission.
   *
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(true);

    const newUser = { ...formData };

    dispatch(setUsersData(newUser));
  };

  return (
    <>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.container}>
          <h1 className={styles.titleHome}>Create Employee</h1>
          <form id="create-employee" onSubmit={handleSubmit}>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Date of Birth
              <input
                type="date"
                name="birth"
                value={formData.birth}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Start Date
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </label>

            <fieldset className="address">
              <legend>Address</legend>

              <label>
                Street
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                State
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  {dataStates.map((state, index) => (
                    <option key={index}>{state.name}</option>
                  ))}
                </select>
              </label>

              <label>
                Zip Code
                <input
                  type="number"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </fieldset>

            <label>
              Department
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              >
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Legal">Legal</option>
              </select>
            </label>

            <input type="submit" value="Save" className={styles.formbutton} />
          </form>
        </div>
      </main>
      {modalOpen && <Modal trigger={modalOpen} setTrigger={setModalOpen} />}
      <Footer />
    </>
  );
};

export default Home;
