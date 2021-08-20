import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Banner from '../../components/Banner/Banner';
import CartList from '../../components/CartList/CartList';
import styles from './_cart-page.module.scss';

import cartBanner from './../../static/images/cart-banner.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/UI/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setCartLength } from 'store/slices/productsSlice';
import { getCartCount } from 'utils/cart';

const CartPage = () => {
  const cartLength = useSelector(({ products }) => products.cart.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartLength(getCartCount()));
  }, []);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Banner banner={cartBanner} title={'Корзина'} />
        <div className={styles.cartCount}>В вашей корзине {cartLength} товар(a)</div>
        <CartList />
        <div className={styles.orderWrapper}>
          <div className={styles.orderDelivery}>
            <h2 className={styles.title}>Способ доставки</h2>
            <p className={styles.orderText}>
              <span className={styles.special}>Способ доставки определити с продавцом / продавцами</span> , написав
              сообщения или связавщись на прямую
            </p>
          </div>
          <div className={styles.authorize}>
            <h2 className={styles.title}>Ваши данные</h2>
            <p className={styles.dangerText}>
              <span>Для заказа товаров требуется регистрация </span>
              Если вы уже зарегистрированы, войдите в свою учетную запись
            </p>
            <Link to="/register">
              <Button type="primary" className={styles.btn}>
                Зарегистрироваться
              </Button>
            </Link>
            <Link to="/login">
              <Button type="primary">Войдите в систему</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
