import React from 'react';
import tableViewImg from '../../assets/images/tableView.svg';
import listViewImg from '../../assets/images/listView.svg';
import LaptopTable from './LaptopTable';
import mockUsers from '../../mock/mockUsers';
import MobileList from './MobileList';
import styles from './userData.module.scss';

const UsersData = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <p>Trending Collections</p>
      <div className={styles.icons__box}>
        <div className={styles.icon__wrapper_active}>
          <img src={tableViewImg} alt="table sort" />
        </div>
        <div className={styles.icon__wrapper}>
          <img src={listViewImg} alt="list sort" />
        </div>
      </div>
    </div>
    <LaptopTable users={mockUsers} />
    <MobileList users={mockUsers} />
  </div>
);

export default UsersData;
