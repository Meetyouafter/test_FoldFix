import React, { FC } from 'react';
import styles from './error.module.scss';

interface ErrorProps {
  error: string | undefined;
}

const Error:FC<ErrorProps> = ({ error }) => (
  <div className={styles.wrapper}>
    <p className={styles.text}>
      Sorry. Error is
      {' '}
      {error}
    </p>
  </div>
);

export default Error;
