import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './table.module.scss';

const NOW_PRICE = 2;
const VOL = '100%';
const SALES = 50;
const INTEREST = '10%';

const Table = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    axios.get('https://robox-test.herokuapp.com/api/collection', {
      headers: {
        apikey: 'test123',
      },
    })
      .then((response) => setUsers(response.data.collection));
  }, []);

  return (
    <main className={styles.info}>
      <table>
        <tr>
          <td>Collection</td>
          <td>Floor price</td>
          <td>Buy now price</td>
          <td>24h Vol %</td>
          <td>24h Sales</td>
          <td>Interest (14 days)</td>
          <td />
        </tr>
        {users && users.map((user) => (
          <tr key={user.project_id}>
            <td>{user.project.display_name}</td>
            <td>{user.floor_price}</td>
            <td>{NOW_PRICE}</td>
            <td>{VOL}</td>
            <td>{SALES}</td>
            <td>{INTEREST}</td>
            <td />
          </tr>
        ))}
      </table>
    </main>
  );
};

export default Table;
