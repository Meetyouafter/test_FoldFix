import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './startPage.module.scss';
import Info from '../Info/Info';
import UsersData from '../UsersData/UsersData';

const StartPage = () => (
  <main className={styles.wrapper}>
    <SearchBar />
    <Info />
    <UsersData />
  </main>
);

export default StartPage;
