import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LaptopTable from './LaptopTable';
import {
  INTEREST, NOW_PRICE, SALES, VOL,
} from '../../mock/mockCollection';
import tableViewImg from '../../assets/images/tableView.svg';
import listViewImg from '../../assets/images/listView.svg';
import styles from './userData.module.scss';
import MobileList from './MobileList';

const UsersData = () => {
  const [collection, setCollection] = useState([]);
  const [collectionForRender, setCollectionForRender] = useState([]);

  useEffect(() => {
    axios.get('https://robox-test.herokuapp.com/api/collection', {
      headers: {
        apikey: 'test123',
      },
    })
      .then((response) => setCollection(response.data.collection))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    if (Array.isArray(collection)) {
      const updatedCollection = collection.map((user) => ({
        id: user.collection_id,
        avatar: user.project.img_url,
        name: user.project.display_name,
        floor_price: user.floor_price,
        now_price: NOW_PRICE,
        vol: VOL,
        sales: SALES,
        interest: INTEREST,
      }));
      setCollectionForRender(updatedCollection);
    }
  }, [collection]);

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
      <LaptopTable collection={collectionForRender} />
      <MobileList collection={collectionForRender} />
    </div>
  );
};

export default UsersData;
