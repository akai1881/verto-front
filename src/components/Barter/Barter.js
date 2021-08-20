import React from 'react';
import { useState } from 'react';
import BarterItem from './components/BarterItem/BarterItem';

import styles from './_barter.module.scss';

const list = [
  {
    title: 'Вода питьевая Сары Агаш, 2 л',
    id: 1,
    price: 700,
    quantity: 10,
  },
  {
    title: 'Вода питьевая Арзу, 19 л',
    id: 2,
    price: 700,
    quantity: 10,
  },
  {
    title: 'Вода питьевая Адал, 2 л',
    id: 3,
    price: 700,
    quantity: 10,
  },
],

const Barter = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className={styles.barterWrapper}>
      <h2 className={styles.barterTitle}>Мой бартерный кошелёк</h2>
      <div className={styles.barterList}>
        {products.map((product) => (
          <BarterItem key={product.id} product={product} list={list}/>
        ))}
      </div>
    </div>
  );
};

export default Barter;
