import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import ProductOptions from 'components/Products/ProductsOptions/ProductOptions';
import ProductView from 'components/Products/ProductView/ProductView';
import ShopInfo from 'components/ShopInfo/ShopInfo';
import Flex from 'components/UI/Flex';
import MainLayout from 'layouts/MainLayout';
import { useParams } from 'react-router';
import styles from './_product-detail.module.scss';
import { Image, Tabs } from 'antd';

import img1 from './../../static/images/1.jpg';
import img2 from './../../static/images/2.jpg';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from 'store/slices/productDetailsSlice';
import { $api } from '../../services/api';
import Spinner from 'components/UI/Spinner';
import { useEffect } from 'react';

const { TabPane } = Tabs;

const ProductsDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { data: product, isLoading } = useSelector(({ productDetails }) => productDetails);

  // const categories = useSelector(({ products }) => products.categories.data);

  // const getBreadCumbs = (slug, array = [], category) => {
  //   if (catego)
  // }

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchDetails(params.productId));
  }, [params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <>
          {/* <BreadCrumbs params={params} /> */}
          {isLoading ? (
            <div style={{ width: '100%', minHeight: 650 }}>
              <Spinner />
            </div>
          ) : (
            <div>
              <Flex className={styles.flex}>
                <div className={styles.swiperWrapper}>
                  <ProductView images={product?.images} />
                </div>
                <ProductOptions product={product} />
                <ShopInfo />
              </Flex>
            </div>
          )}

          <div className="tab-custom">
            <Tabs defaultActiveKey="1">
              <TabPane tab="????????????????" key="1">
                <p className={styles.descrText}>{product?.description}</p>

                <div>
                  <Image preview={false} src={img1} />
                </div>

                <div>
                  <Image preview={false} src={img2} />
                </div>
              </TabPane>
              <TabPane tab="????????????????????????????" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="????????????" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </>
      </div>
    </MainLayout>
  );
};

export default ProductsDetail;
