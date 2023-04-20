import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './startPage.module.scss';
import Info from '../Info/Info';
import Table from '../Table/Table';

const StartPage = () => (
  <main className={styles.wrapper}>
    <SearchBar />
    <Info />
    <Table />
  </main>
);

export default StartPage;
