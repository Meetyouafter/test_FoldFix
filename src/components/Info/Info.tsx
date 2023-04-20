import React, { useState } from 'react';
import styles from './info.module.scss';

const data = [
  { id: 1, title: '88', description: 'ololol' },
  { id: 2, title: '88', description: 'ololol' },
  { id: 3, title: '88', description: 'ololol' },
  { id: 4, title: '88', description: 'ololol' },
  { id: 5, title: '88', description: 'ololol' },
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
