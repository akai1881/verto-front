import BannerCategory from 'components/BannerCategory/BannerCategory';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Sidebar from 'components/Sidebar/Sidebar';
import Flex from 'components/UI/Flex';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from 'components/Products/ProductList/ProductList';
import ProductToolbarHeader from 'components/Products/ProductToolbarHeader/ProductToolbarHeader';
import styles from './_goods.module.scss';

const Goods = () => {
  const params = useParams();

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <BreadCrumbs params={params} />

        <BannerCategory categoryName={params.categoryName} />

        <Flex>
          <Sidebar params={params} />
          <div className={styles.products_list}>
            <ProductToolbarHeader results={1000} />
            <ProductList />
          </div>
        </Flex>
      </div>
    </MainLayout>
  );
};

export default Goods;
