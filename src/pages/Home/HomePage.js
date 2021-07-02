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
    title:
      'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM) sdafdsafds dsafdsf',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    img: card1,
  },
  {
    id: 2,
    title: 'Лимон Мейер плоды',
    status: false,
    min_purchase: 25,
    unity: 'кв.м',
    img: card2,
  },
  {
    id: 3,
    title: 'Мозаичная плитка для кухни, ванной комнаты',
    status: true,
    min_purchase: 10,
    unity: 'кв.м',
    img: card3,
  },
  {
    id: 4,
    title: 'New Balance 574 кроссовки',
    status: true,
    min_purchase: 3,
    unity: 'партии',
    img: card4,
  },
];

const newItems = [
  {
    id: 1123,
    title: 'Сверхмощный промышленный вентилятора',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    img: new1,
  },
  {
    id: 2123,
    title: 'Отдых в Premium Spa Resort, Чунджа ',
    status: false,
    min_purchase: 20,
    unity: 'шт',
    img: new2,
  },
  {
    id: 314535,
    title: 'Многоразовая, антимагнитная, противотуманная, лицевая маска',
    status: true,
    min_purchase: 10,
    unity: 'шт',
    img: new3,
  },
  {
    id: 42134,
    title: 'Ортодонтия (брекеты) в Алматы',
    status: true,
    min_purchase: 3,
    unity: 'шт',
    img: new4,
  },
];

const HomePage = (props) => {
  console.log(props);

  return (
    <MainLayout>
      <HeroCarousel />
      <ProductSection
        ComponentItem={CategoryCard}
        data={categoriesMock}
        title="Tоп категории"
        span={4}
        titleGutter={37}
      />
      <section className={styles.info}>
        <Title level={3} className="title" style={{ marginBottom: 40 }}>
          Как это работает?
        </Title>
        <Flex>
          <div className={styles.leftBar}>
            <Title level={4} className={styles.title}>
              Поднимите свой бизнес с GetbyVerto
            </Title>
            <Paragraph className={styles.descr}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </div>
          <div style={{ height: '100%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="798px"
              height="450px"
              // className={styles.react_player}
            />
          </div>
        </Flex>
      </section>
      <ProductSection
        ComponentItem={Card}
        data={popular}
        gutter={[26, 16]}
        title="Популярное"
        span={6}
        titleGutter={40}
      />
      <ProductSection
        ComponentItem={Card}
        data={newItems}
        title="Новинки"
        span={6}
        gutter={[26, 16]}
        top={87}
        titleGutter={28}
      />
      <ProductSection
        ComponentItem={Card}
        data={popular}
        gutter={[26, 16]}
        title="Недавно просмотренные"
        span={6}
        top={87}
        bottom={95}
        titleGutter={40}
      />
    </MainLayout>
  );
};

export default HomePage;