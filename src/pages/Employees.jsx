import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
// styles
import styles from '../styles/Employees.module.css';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Employees = () => {
  let employeeDatas = useSelector((state) => state.user.users);

  // React table
  const columns = [
    {
      name: 'FirstName',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'lastName',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'startDate',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'birth',
      selector: (row) => row.birth,
      sortable: true,
    },
    {
      name: 'street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'city',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'state',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'zipCode',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  //search react table
  const [records, setRecords] = useState(employeeDatas);
  function searchBarFilter(event) {
    const { value } = event.target;

    const newData = employeeDatas.filter((row) => {
      const firstNameMatch = row.firstName
        .toLowerCase()
        .includes(value.toLowerCase());
      const lastNameMatch = row.lastName
        .toLowerCase()
        .includes(value.toLowerCase());
      const startDateMatch = row.startDate
        .toLowerCase()
        .includes(value.toLowerCase());
      const departmentMatch = row.department
        .toLowerCase()
        .includes(value.toLowerCase());
      const birthMatch = row.birth.toLowerCase().includes(value.toLowerCase());
      const streetMatch = row.street
        .toLowerCase()
        .includes(value.toLowerCase());
      const cityMatch = row.city.toLowerCase().includes(value.toLowerCase());
      const stateMatch = row.state.toLowerCase().includes(value.toLowerCase());
      const zipCodeMatch = row.zipCode
        .toLowerCase()
        .includes(value.toLowerCase());
      // Retourne true si au moins l'un des champs (firstName ou lastName) correspond
      return (
        firstNameMatch ||
        lastNameMatch ||
        startDateMatch ||
        departmentMatch ||
        birthMatch ||
        streetMatch ||
        cityMatch ||
        stateMatch ||
        zipCodeMatch
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
          <table id="employee-table" className={styles.display}></table>
          <input className="searchBar" onChange={searchBarFilter}></input>
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
