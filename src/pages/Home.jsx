import React from 'react';
// pages
import Error from './Error';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// style
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className={styles.hero}></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
