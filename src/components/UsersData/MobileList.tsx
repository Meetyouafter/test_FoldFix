import React, { FC } from 'react';
import { UsersProps, getFloorPrice } from './LaptopTable';
import styles from './userData.module.scss';

const MobileList:FC<UsersProps> = ({ collection }) => (
  <div className={`${styles.mobileList} ${styles.mobile_screen}`}>
    {collection.map((user) => (
      <div key={user.id} className={styles.mobileList__user}>
        <div className={styles.mobileList__userHead}>
          <img src={user.avatar} alt="avatar" className={styles.table__avatar} />
          <p>{user.name}</p>
        </div>
        <div className={styles.mobileList__userRow}>
          <p>Floor Price</p>
          <p>
            {getFloorPrice(user.floor_price)}
            {' '}
            SOL
          </p>
        </div>
        <div className={styles.mobileList__userRow}>
          <p>Buy now price</p>
          <p>
            {user.now_price}
            {' '}
            SOL
          </p>
        </div>
        <div className={styles.mobileList__userRow}>
          <p>24h Vol%</p>
          <p>{user.vol}</p>
        </div>
        <div className={styles.mobileList__userRow}>
          <p>24h Sales</p>
          <p>{user.sales}</p>
        </div>
        <div className={styles.mobileList__userRow}>
          <p>Interest (14 days)</p>
          <p>{user.interest}</p>
        </div>
        <button className={styles.table__button} type="button">Instant buy</button>
      </div>
    ))}
  </div>
);

export default MobileList;
