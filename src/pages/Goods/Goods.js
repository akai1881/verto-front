import BannerCategory from 'components/Banner/Banner';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Sidebar from 'components/Sidebar/Sidebar';
import Flex from 'components/UI/Flex';
import MainLayout from 'layouts/MainLayout';
import React, {useMemo} from 'react';
import { useParams } from 'react-router-dom';
import ProductList from 'components/Products/ProductList/ProductList';
import ProductToolbarHeader from 'components/Products/ProductToolbarHeader/ProductToolbarHeader';
import styles from './_goods.module.scss';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';
import OptionsDialog from 'components/OptionsDialog';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Banner from "components/Banner/Banner";
import banner from './../../static/images/Banners.png'

const Goods = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const params = useParams();
  const categories = useSelector(({products}) => products.categories.data)
  const open = useSelector(({ modal }) => modal.optionsDialog.open);

  const getName = () => {
    const first = categories.find((item) => item.slug == params.categoryIndex);
    const subCategory = first?.children?.find((item) => item.slug === params?.subCategoryIndex);
    const targetCategory = subCategory?.children?.find((item) => item.slug === params?.categoryName);

    return targetCategory?.title;
  };

  const name = useMemo(() => getName(), [params])

  return (
    <div className={styles.main}>
      <MainLayout>
        <div className={styles.wrapper}>
          <BreadCrumbs params={params} />

          <Banner title={name} banner={banner} />

          <Flex>
            {!isMobile && <Sidebar params={params} />}
            <div className={styles.products_list}>
              <ProductToolbarHeader results={1000} />
              <ProductList />
            </div>
          </Flex>
        </div>
      </MainLayout>
      <CSSTransition in={open} classNames="options-menu" unmountOnExit timeout={500}>
        <OptionsDialog />
      </CSSTransition>
    </div>
  );
};

export default Goods;
