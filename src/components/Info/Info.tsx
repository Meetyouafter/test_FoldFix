import React from 'react';
import mobileLogo from '../../assets/images/mobileLogo.png';
import data from '../../mock/mockInfo';
import styles from './info.module.scss';

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
    <img src={mobileLogo} alt="logo" className={styles.info__mobileLogo} />
  </main>
);

export default Info;
