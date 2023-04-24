import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import tableSortImg from '../../assets/images/tableSort.svg';
import styles from './table.module.scss';

type User = {
  id: number,
  avatar: string,
  name: string,
  floor_price: number,
  now_price: number,
  vol: string,
  sales: string,
  interest: string,
}

export type UsersProps = {
  users: User[];
}

const LaptopTable: FC<UsersProps> = ({ users }) => {
  const [userDataForTable, setUserDataForTable] = useState(users);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  useEffect(() => {
    const updatedUserData = users.map((data) => ({
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      floor_price: data.floor_price,
      now_price: data.now_price,
      vol: data.vol,
      sales: data.sales,
      interest: data.interest,
    }));
    setUserDataForTable(updatedUserData);
  }, [users]);

  const getFloorPrice = (price: number): number => Math.floor(price);

  const handleSortClick = (key: keyof User) => {
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
    axios.get('https://robox-test.herokuapp.com/api/collection', {
      headers: {
        apikey: 'test123',
      },
    })
      .then((response) => console.log(response.data));
  }, []);

  return (
    <table className={`${styles.table} ${styles.laptop_screen}`}>
      <thead>
        <tr>
          <th className={styles.width__25}>
            Collection
          </th>
          <th onClick={() => handleSortClick('floor_price')} className={styles.width__10}>
            Floor price
            <img src={tableSortImg} alt="sorted" />
          </th>
          <th onClick={() => handleSortClick('now_price')} className={styles.width__10}>
            Buy now price
            <img src={tableSortImg} alt="sorted" />
          </th>
          <th onClick={() => handleSortClick('vol')} className={styles.width__10}>
            24h Vol %
            <img src={tableSortImg} alt="sorted" />
          </th>
          <th onClick={() => handleSortClick('sales')} className={styles.width__10}>
            24h Sales
            <img src={tableSortImg} alt="sorted" />
          </th>
          <th className={styles.width__10}>
            Interest (14 days)
          </th>
          <td className={styles.width__10} />
        </tr>
      </thead>
      <tbody>
        {userDataForTable.map((user) => (
          <tr key={user.id}>
            <td className={`${styles.table__column_name} ${styles.width__25}`}>
              <img src={user.avatar} alt="avatar" className={styles.table__avatar} />
              {user.name}
            </td>
            <td className={styles.width__10}>
              {getFloorPrice(user.floor_price)}
              {' '}
              SOL
            </td>
            <td className={styles.width__10}>
              {user.now_price}
              {' '}
              SOL
            </td>
            <td className={styles.width__10}>{user.vol}</td>
            <td className={styles.width__10}>{user.sales}</td>
            <td className={styles.width__10}>{user.interest}</td>
            <td className={styles.width__10}>
              <button className={styles.table__button} type="button">Instant buy</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LaptopTable;
