import React from 'react';
import styles from './loader.module.scss';

const Loader = () => (
  <div className={styles.wrapper}>
    <p className={styles.text}>Loading...</p>
  </div>
);

export default Loader;
