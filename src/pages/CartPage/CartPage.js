import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import Banner from "../../components/Banner/Banner";
import CartList from "../../components/CartList/CartList";
import styles from './_cart-page.module.scss'

import cartBanner from './../../static/images/cart-banner.png'

const CartPage = () => {
  return (
    <MainLayout>
      <Banner banner={cartBanner} title={'Корзина'}/>
      <div className={styles.cartWrapper}>
        <CartList/>
      </div>
    </MainLayout>
  );
};

export default CartPage;