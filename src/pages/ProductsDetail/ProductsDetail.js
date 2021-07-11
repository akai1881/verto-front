import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import ProductOptions from 'components/Products/ProductsOptions/ProductOptions';
import ProductView from 'components/Products/ProductView/ProductView';
import ShopInfo from 'components/ShopInfo/ShopInfo';
import Flex from 'components/UI/Flex';
import MainLayout from 'layouts/MainLayout';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './_product-detail.module.scss';
import { Image, Tabs } from 'antd';

import img1 from './../../static/images/1.jpg';
import img2 from './../../static/images/2.jpg';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from 'store/slices/productDetailsSlice';

const { TabPane } = Tabs;

const ProductsDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { data: product, isLoading } = useSelector(
    ({ productDetails }) => productDetails
  );

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchDetails(params.productId));
  }, []);

  useEffect(() => {
    console.log(product);
    console.log(isLoading);
  }, [product, isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <>
          {isLoading ? (
            'Загрука...'
          ) : (
            <Flex>
              <ProductView images={product?.images} />
              <ProductOptions product={product} />
              <ShopInfo />
            </Flex>
          )}

          <div className="tab-custom">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Описание" key="1">
                <p className={styles.descrText}>{product?.description}</p>

                <div>
                  <Image preview={false} src={img1}></Image>
                </div>

                <div>
                  <Image preview={false} src={img2}></Image>
                </div>
              </TabPane>
              <TabPane tab="Характеристики" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Отзывы" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </>
        {/* <BreadCrumbs params={params} /> */}
      </div>
    </MainLayout>
  );
};

export default ProductsDetail;
