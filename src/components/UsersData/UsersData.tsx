import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { User as UserType } from '../../store/types';
import { getCollection } from '../../store/collectionSlice';
import { RootState } from '../../store/store';
import LaptopTable from './LaptopTable';
import {
  INTEREST, NOW_PRICE, SALES, VOL,
} from '../../mock/mockCollection';
import tableViewImg from '../../assets/images/tableView.svg';
import listViewImg from '../../assets/images/listView.svg';
import styles from './userData.module.scss';
import MobileList from './MobileList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const UsersData = () => {
  const [collectionForRender, setCollectionForRender] = useState([]);

  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const collection = useSelector<RootState, UserType[]>((state) => state.collection.collection);
  const isLoading = useSelector<RootState>((state) => state.collection.isLoading);
  const error = useSelector<RootState>((state) => state.collection.error);

  useEffect(() => {
    dispatch(getCollection());
  }, [dispatch]);

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

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error as string} />;
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
      <MobileList collection={collectionForRender} />
    </div>
  );
};

export default UsersData;
