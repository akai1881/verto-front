import React from 'react';
// import image from './../../static/images/'
import styles from './_cart.module.scss'
import CartItem from './../CartItem/CartItem'

import image from './../../static/images/iphone-2.png';

const list = [
  {
    item: {
      title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
      vendor: 'ИП “Призма”',
      vendorCode: '025 ASE',
      features: [
        {
          feature: 2,
          feature_title: 'Бренд',
          value: "Apple",
          product: 1
        }
      ],
      id: 1,
      price: 365000,
      image: image,
    },
    count: 1,
  },
  {
    item: {
      title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
      vendor: 'ИП “Призма”',
      vendorCode: '025 ASE',
      features: [
        {
          feature: 2,
          feature_title: 'Бренд',
          value: "Apple",
          product: 1
        }
      ],
      id: 1,
      price: 365000,
      image: image,
    },
    count: 1,
  },
  {
    item: {
      title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
      vendor: 'ИП “Призма”',
      vendorCode: '025 ASE',
      features: [
        {
          feature: 2,
          feature_title: 'Бренд',
          value: "Apple",
          product: 1
        }
      ],
      id: 1,
      price: 365000,
      image: image,
    },
    count: 1,
  },
  {
    item: {
      title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
      vendor: 'ИП “Призма”',
      vendorCode: '025 ASE',
      features: [
        {
          feature: 2,
          feature_title: 'Бренд',
          value: "Apple",
          product: 1
        }
      ],
      id: 1,
      price: 365000,
      image: image,
    },
    count: 1,
  }
]

const CartList = () => {
  return (
    <div className={styles.cartListWrapper}>
      {list.map(item => (
        <CartItem count={item.count} product={item.item}/>
      ))}
    </div>
  );
};

export default CartList;