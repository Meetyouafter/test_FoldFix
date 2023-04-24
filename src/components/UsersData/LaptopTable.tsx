import React, { useEffect, useState, FC } from 'react';
import tableSortImg from '../../assets/images/tableSort.svg';
import styles from './userData.module.scss';

type UpdatedCollection = {
  id: string,
  avatar: string,
  name: string,
  floor_price: number,
  now_price: string,
  vol: string,
  sales: string,
  interest: string,
}

export interface UsersProps {
  collection: UpdatedCollection[];
}

export const getFloorPrice = (price: number): number => Math.floor(price);

const LaptopTable: FC<UsersProps> = ({ collection }) => {
  const [collectionForTable, setCollectionForTable] = useState([]);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  useEffect(() => {
    setCollectionForTable(collection);
  }, [collection]);

  const handleSortClick = (key: keyof UpdatedCollection) => {
    setCollectionForTable((prevUserData) => {
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
        {collectionForTable.map((user) => (
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
