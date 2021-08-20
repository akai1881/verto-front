import MySelect from 'components/UI/Select';
import React from 'react';
import { useState } from 'react';
import styles from './_barter-item.module.scss';

const data = [
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
];

const BarterItem = (product) => {
  const [currentProduct, setCurrentProduct] = useState();

  return (
    <div className={styles.wrapper}>
      <MySelect bordered={false} dropdownClassName="selector" maxTagTextLengt={40} data={data} />
    </div>
  );
};

export default BarterItem;
