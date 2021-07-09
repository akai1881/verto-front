import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import ProductView from 'components/Products/ProductView/ProductView';
import Flex from 'components/UI/Flex';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { useParams } from 'react-router';
import styles from './_product-detail.module.scss';

const ProductsDetail = () => {
  const params = useParams();

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        {/* <BreadCrumbs params={params} /> */}

        <Flex>
          <ProductView />
          {/* <ProductOptions /> */}
          {/* <ShopInfo /> */}
        </Flex>
      </div>
    </MainLayout>
  );
};

export default ProductsDetail;
