import React, { useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import LaptopTable from './LaptopTable';
import { getCollectionThunk } from '../../store/dataSlice/collectionSlice';
import { useAppSelector } from '../../store/hooks';
import {
  INTEREST, NOW_PRICE, SALES, VOL,
} from '../../mock/mockCollection';
import tableViewImg from '../../assets/images/tableView.svg';
import listViewImg from '../../assets/images/listView.svg';
import styles from './userData.module.scss';

const UsersData = () => {
  const [collectionForRender, setCollectionForRender] = useState([]);

  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const collection = useAppSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getCollectionThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log(!collection.loading, Array.isArray(collection.collection))
    console.log((collection.collection.collection))
    console.log((collection))

    if (!collection.loading && Array.isArray(collection.collection)) {
      console.log(2, 'isArray', Array.isArray(collection.collection), collection.collection)
      const updatedCollection = collection.collection.map((user) => ({
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

  console.log('collectionForRender', collectionForRender);

  if (collection.loading) {
    return (
      <div>hi</div>
    );
  }

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
    </div>
  );
};

export default UsersData;
