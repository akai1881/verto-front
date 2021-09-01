import React, { useCallback } from 'react';
// import image from './../../static/images/'
import styles from './_cart.module.scss';
import CartItem from './../CartItem/CartItem';

import image from './../../static/images/iphone-2.png';
import { getItemsFromLocalStorage } from 'utils/helpers';
import { useState } from 'react';
import { addItemToCart } from 'utils/cart';
import { openNotification } from 'utils/notifications';
import { useDispatch } from 'react-redux';
import { setCartLength } from 'store/slices/productsSlice';
import { TransitionGroup } from 'react-transition-group';
import Fade from 'react-reveal/Fade';

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
          value: 'Apple',
          product: 1,
        },
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
          value: 'Apple',
          product: 1,
        },
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
          value: 'Apple',
          product: 1,
        },
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
          value: 'Apple',
          product: 1,
        },
        {
          feature: 2,
          feature_title: 'Бренд',
          value: 'Apple',
          product: 1,
        },
        {
          feature: 2,
          feature_title: 'Бренд',
          value: 'Apple',
          product: 1,
        },
      ],
      id: 1,
      price: 365000,
      image: image,
    },
    count: 1,
  },
];

const CartList = () => {
  const [cart, setCart] = useState(getItemsFromLocalStorage('cart') || []);
  const dispatch = useDispatch();

  const handleDeleteItem = useCallback(
    (item) => {
      addItemToCart(item).then(({ cart, type }) => {
        if (type == 'delete') {
          setCart(cart);
          dispatch(setCartLength(cart.products.length));
          openNotification('success', 'Товар удален из корзины', 2);
        }
      });
    },
    [cart]
  );

  return (
    <div className={styles.cartListWrapper}>
      <TransitionGroup appear={false} enter={true} exit={true}>
        {cart.products.length > 0
          ? cart.products.map((item) => (
              <Fade collapse top>
                <CartItem count={item.count} product={item.item} key={item.item.id} onDelete={handleDeleteItem} />
              </Fade>
            ))
          : null}
      </TransitionGroup>
    </div>
  );
};

export default CartList;
