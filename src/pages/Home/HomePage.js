import React from 'react';
import { Typography } from 'antd';
import HeroCarousel from 'components/HeroCarousel/HeroCarousel';
import CategoryCard from 'components/Products/CategoryCard/CategoryCard';
import ProductSection from 'components/Products/ProductSection/ProductSection';
import MainLayout from '../../layouts/MainLayout';
import Card from 'components/Products/ProductCard/Card';
import Title from 'antd/lib/typography/Title';
import Flex from 'components/UI/Flex';
import ReactPlayer from 'react-player/lazy';
import styles from './_home-page.module.scss';
import banner1 from './../../static/images/Banners-35.jpg';
import banner2 from './../../static/images/Banners-34.jpg';
import banner3 from './../../static/images/Banners-36.jpg';
import banner4 from './../../static/images/Banners-37.jpg';
import banner5 from './../../static/images/Banners-38.jpg';
import banner6 from './../../static/images/Banners-39.jpg';

import card1 from './../../static/images/s-l500 (5).jpg';
import card2 from './../../static/images/s-l1600 (2).jpg';
import card3 from './../../static/images/s-l1600 (14).jpg';
import card4 from './../../static/images/s-l1600.jpg';

import new1 from './../../static/images/s-l1600 (23).jpg';
import new2 from './../../static/images/1506666155_premium-spa-2.jpg';
import new3 from './../../static/images/s-l1600 (27).jpg';
import new4 from './../../static/images/unnamed.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchNewProducts,
  fetchPopularProducts,
  fetchRecentlyView,
  fetchTopCategories,
} from 'store/slices/productsSlice';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';
import { Suspense } from 'react';
import Spinner from 'components/UI/Spinner';

const { Paragraph } = Typography;
const categoriesMock = [
  {
    id: 1,
    title: 'Cмартфоны',
    img: banner1,
  },
  {
    id: 2,
    title: 'Одежда и обувь',
    img: banner2,
  },
  {
    id: 3,
    title: 'Продукты питания',
    img: banner3,
  },
  {
    id: 4,
    title: 'Авто и запчасти',
    img: banner4,
  },
  {
    id: 5,
    title: 'Красота и здоровье',
    img: banner5,
  },
  {
    id: 6,
    title: 'Дом и сад',
    img: banner6,
  },
];

const popular = [
  {
    id: 1,
    title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM) sdafdsafds dsafdsf',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    images: [{ image: card2 }],
  },
  {
    id: 2,
    title: 'Лимон Мейер плоды',
    status: false,
    min_purchase: 25,
    unity: 'кв.м',
    images: [{ image: card2 }],
  },
  {
    id: 3,
    title: 'Мозаичная плитка для кухни, ванной комнаты',
    status: true,
    min_purchase: 10,
    unity: 'кв.м',
    images: [{ image: card2 }],
  },
  {
    id: 4,
    title: 'New Balance 574 кроссовки',
    status: true,
    min_purchase: 3,
    unity: 'партии',
    images: [{ image: card2 }],
  },
];

const newItems = [
  {
    id: 1123,
    title: 'Сверхмощный промышленный вентилятора',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    images: [{ image: card2 }],
  },
  {
    id: 2123,
    title: 'Отдых в Premium Spa Resort, Чунджа ',
    status: false,
    min_purchase: 20,
    unity: 'шт',
    images: [{ image: card2 }],
  },
  {
    id: 314535,
    title: 'Многоразовая, антимагнитная, противотуманная, лицевая маска',
    status: true,
    min_purchase: 10,
    unity: 'шт',
    images: [{ image: card2 }],
  },
  {
    id: 42134,
    title: 'Ортодонтия (брекеты) в Алматы',
    status: true,
    min_purchase: 3,
    unity: 'шт',
    images: [{ image: card2 }],
  },
];

const HomePage = (props) => {
  const dispath = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const {topCategories, isLoading: topCategoriesLoading} = useSelector(({ products }) => products.categories);

  const {data: popularProducts, isLoading: popularProductsLoading} = useSelector(({ products }) => products.popularProducts);

  const {data: newProducts, isLoading: newProductsLoading} = useSelector(({ products }) => products.newProducts);
  const {data: recentlyView, isLoading: recentlyViewLoading} = useSelector(({ products }) => products.recentlyView);

  useEffect(() => {
    dispath(fetchTopCategories());
    dispath(fetchPopularProducts());
    dispath(fetchNewProducts());
    dispath(fetchRecentlyView());
  }, []);

  return (
    <MainLayout>
      <HeroCarousel />
      <ProductSection
        ComponentItem={CategoryCard}
        data={topCategories}
        loading={topCategoriesLoading}
        title="Tоп категории"
        span={4}
        xs={8}
        autoplay={true}
        loop={true}
        perView={3}
        top={isMobile && 16}
        md={6}
        xl={4}
        titleGutter={isMobile ? 8 : 37}
      />
      <section className={styles.info}>
        <Title level={3} className="title" style={{ marginBottom: 40 }}>
          Как это работает?
        </Title>
        <Flex className={styles.infoFlex}>
          <div className={styles.leftBar}>
            <Title level={4} className={styles.title}>
              Поднимите свой бизнес с GetbyVerto
            </Title>
            <Paragraph className={styles.descr}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Paragraph>
          </div>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height={`${isMobile ? '250px' : '450px'}`}
              className={styles.reactPlayer}
            />
          </div>
        </Flex>
      </section>
      <ProductSection
        ComponentItem={Card}
        data={popularProducts}
        loading={popularProductsLoading}
        gutter={[26, 16]}
        title="Популярное"
        span={6}
        top={isMobile && 24}
        xs={12}
        isCard
        perView={2}
        responsive={{ isMobile }}
        sm={12}
        md={6}
        titleGutter={isMobile ? 14 : 40}
      />
      <ProductSection
        ComponentItem={Card}
        data={newProducts}
        loading={newProductsLoading}
        title="Новинки"
        span={6}
        perView={2}
        isCard
        xs={12}
        md={6}
        responsive={{ isMobile }}
        gutter={[26, 16]}
        top={isMobile ? 24 : 87}
        titleGutter={isMobile ? 14 : 28}
      />
      <ProductSection
        ComponentItem={Card}
        data={recentlyView}
        loading={recentlyViewLoading}
        gutter={[26, 26]}
        title="Недавно просмотренные"
        span={6}
        xs={12}
        perView={2}
        md={8}
        lg={8}
        isCard
        xl={6}
        responsive={{ isMobile }}
        top={isMobile ? 24 : 87}
        bottom={95}
        titleGutter={isMobile ? 14 : 40}
      />
    </MainLayout>
  );
};

export default HomePage;
