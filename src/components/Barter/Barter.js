import React from 'react';
import { useState } from 'react';
import BarterItem from 'components/Barter/components/BarterItem/BarterItem';
import { ReactComponent as PlusIcon } from './../../static/icons/Button/20_More_white.svg';
import styles from './_barter.module.scss';
import Button from 'components/UI/Button';
import { useEffect } from 'react';
import BarterOption from 'components/BarterOption/BarterOption';
import OrderMethod from 'components/OrderMethod/OrderMethod';

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
    price: 700000,
    quantity: 10,
  },
  {
    title: 'Вода питьевая Адал, 2 л',
    id: 3,
    price: 12312,
    quantity: 10,
  },
];

const Barter = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const createBarterItem = () => {
    const newBarterItem = {
      title: '',
      key: Date.now() + Math.random() * 100,
      price: 0,
      quantity: 1,
      active: false,
    };

    setProducts((prev) => [...prev, newBarterItem]);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  const setBarterItem = (barterId, barterIndex) => {
    const key = products[barterIndex].key;
    const barterProduct = list.find((item) => item.id === barterId);
    setProducts((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          item = {
            key: item.key,
            ...barterProduct,
            active: true,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={styles.barterWrapper}>
      <h2 className={styles.barterTitle}>Мой бартерный кошелёк</h2>
      <div className={styles.barterList}>
        <>
          {products.map((product, index) => (
            <BarterItem key={product.key} product={product} list={list} setBarterItem={setBarterItem} index={index} />
          ))}
        </>
        <div className={styles.btnWrapper}>
          <Button type="primary" className={styles.btn} onClick={createBarterItem}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <PlusIcon style={{ marginRight: 8 }} />
              Добавить товар
            </span>
          </Button>
        </div>
        {products.length > 0 ? (
          <>
            <div className={styles.divider} />
            <div classNames={styles.totalPrice}>
              <span>Итоговая сумма</span>
              <span></span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Barter;
