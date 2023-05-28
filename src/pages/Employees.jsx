import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
// styles
import styles from '../styles/Employees.module.css';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Employees component.
 * Renders the employees section of the website.
 *
 * @component
 * @returns {JSX.Element} The rendered JSX element for the employees section.
 */
const Employees = () => {
  // Redux state
  let employeeDatas = useSelector((state) => state.user.users);

  // React table columns
  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.birth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  // State for filtered records
  const [records, setRecords] = useState(employeeDatas);

  /**
   * Filters the employees based on the provided search value.
   * Updates the filtered records in the component state.
   *
   * @param {Event} event - The change event triggered by the filter input.
   */
  function filterEmployees(event) {
    const { value } = event.target;
    const newData = employeeDatas.filter((row) => {
      const rowValues = Object.values(row);

      return rowValues.some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
    });
    setRecords(newData);
  }

  return (
    <>
      <Header />
      <main className={styles.mainEmployees}>
        <div id="employee-div" className={styles.container}>
          <h1>Current Employees</h1>
          <input
            placeholder="Filter"
            className={styles.filter}
            onChange={filterEmployees}
          ></input>
          <table id="employee-table" className={styles.table}></table>
        </div>
        <DataTable
          columns={columns}
          data={records}
          fixedHeader
          pagination
        ></DataTable>
      </main>
      <Footer />
    </>
  );
};

export default Employees;
