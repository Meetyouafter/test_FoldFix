import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableSortImg from '../../assets/images/tableSort.svg';
import tableViewImg from '../../assets/images/tableView.svg';
import listViewImg from '../../assets/images/listView.svg';
import styles from './table.module.scss';

const NOW_PRICE = 2;
const VOL = '100%';
const SALES = 50;
const INTEREST = '10%';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [userDataForTable, setUserDataForTable] = useState([]);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});
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

  useEffect(() => {
    const updatedUserData = users.map((data) => ({
      id: data.project_id,
      avatar: data.project.img_url,
      name: data.project.display_name,
      floor_price: data.floor_price,
      now_price: NOW_PRICE,
      vol: VOL,
      sales: SALES,
      interest: INTEREST,
    }));
    setUserDataForTable(updatedUserData);
  }, [users]);

  const getFloorPrice = (price: number): number => Math.floor(price);

  const handleSortClick = (key: string) => {
    setUserDataForTable((prevUserData) => {
      const sortedData = [...prevUserData].sort((a, b) => {
        if (sortOrder[key] === 'asc') {
          return a[key] < b[key] ? 1 : -1;
        }
        return a[key] > b[key] ? 1 : -1;
      });
      setSortOrder((prevSortOrder) => ({
        ...prevSortOrder,
        [key]: prevSortOrder[key] === 'asc' ? 'desc' : 'asc',
      }));
      return sortedData;
    });
  };

  useEffect(() => {
    fetch('https://robox-test.herokuapp.com/api/collection', {
      mode: 'no-cors', // 'cors' by default
      headers: {
        apikey: 'test123',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  /*
          'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '1800',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS',
        */

  return (
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              Collection
            </th>
            <th onClick={() => handleSortClick('floor_price')}>
              Floor price
              <img src={tableSortImg} alt="sorted" />
            </th>
            <th onClick={() => handleSortClick('now_price')}>
              Buy now price
              <img src={tableSortImg} alt="sorted" />
            </th>
            <th onClick={() => handleSortClick('vol')}>
              24h Vol %
              <img src={tableSortImg} alt="sorted" />
            </th>
            <th onClick={() => handleSortClick('sales')}>
              24h Sales
              <img src={tableSortImg} alt="sorted" />
            </th>
            <th>
              Interest (14 days)
            </th>
            <td />
          </tr>
        </thead>
        <tbody>
          {users && userDataForTable.map((user) => (
            <tr key={user.id}>
              <td className={styles.table__column_name}>
                <img src={user.avatar} alt="avatar" className={styles.table__avatar} />
                {user.name}
              </td>
              <td>
                {getFloorPrice(user.floor_price)}
                {' '}
                SOL
              </td>
              <td>{NOW_PRICE}</td>
              <td>{VOL}</td>
              <td>{SALES}</td>
              <td>{INTEREST}</td>
              <td>
                <button className={styles.table__button} type="button">Instant buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
