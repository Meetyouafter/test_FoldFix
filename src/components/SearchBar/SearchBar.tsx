import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import moonImg from '../../assets/images/moon.svg';
import styles from './searchBar.module.scss';

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const toggleActiveButton = (index: number) => {
    setActiveButton(index);
  };

  const getButtonClassName = (index: number): string => {
    if (activeButton === index) {
      return styles.header__button_active;
    }
    return styles.header__button;
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__leftSide}>
        <img src={logoImg} alt="FoldFix" />
        <p className={styles.header__company}>Robox.Fi</p>
        <button type="button" onClick={() => toggleActiveButton(1)} className={getButtonClassName(1)}>Trade</button>
        <button type="button" onClick={() => toggleActiveButton(2)} className={getButtonClassName(2)}>Lend</button>
        <button type="button" onClick={() => toggleActiveButton(3)} className={getButtonClassName(3)}>LeaderBoards</button>
        <button type="button" onClick={() => toggleActiveButton(4)} className={getButtonClassName(4)}>About</button>
      </div>
      <div className={styles.header__rightSide}>
        <input
          type="search"
          className={styles.header__search}
          placeholder="Search collections, NTFs"
        />
        <button type="button" className={styles.header__button}>
          <img src={moonImg} alt="Change theme" />
        </button>
        <button className={styles.header__button} type="button">Connect Wallet</button>
      </div>
    </header>
  );
};

export default SearchBar;
