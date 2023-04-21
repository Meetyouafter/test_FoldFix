import React, { useState } from 'react';
import styles from './info.module.scss';

const data = [
  { id: 1, title: '8497.55 SOL', description: 'Total Interest (from Active Loans)' },
  { id: 2, title: '21673', description: 'Total Interest (from Active Loans)' },
  { id: 3, title: '4085/1508', description: 'Loans in 24H/12H' },
  { id: 4, title: '295240.32 SOL', description: 'Active Loans Volume' },
  { id: 5, title: '337506.33 SOL', description: 'Total Value Locked' },
];

const Info = () => (
  <main className={styles.info}>
    <p className={styles.info__title}>
      Buy your favorite NFTs with
      {' '}
      <span>leverage</span>
    </p>
    <div className={styles.info__body}>
    {data.map((el) => (
      <div className={styles.info__box} key={el.id}>
        <p className={styles.info__box__title}>{el.title}</p>
        <p className={styles.info__box__description}>{el.description}</p>
      </div>
    ))}
    </div>
  </main>
);

export default Info;
