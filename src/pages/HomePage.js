import HeroCarousel from 'components/HeroCarousel/HeroCarousel';
import CategoryCard from 'components/Products/CategoryCard/CategoryCard';
import ProductSection from 'components/Products/ProductSection/ProductSection';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

import banner1 from './../static/images/Banners-35.jpg';
import banner2 from './../static/images/Banners-34.jpg';
import banner3 from './../static/images/Banners-36.jpg';
import banner4 from './../static/images/Banners-37.jpg';
import banner5 from './../static/images/Banners-38.jpg';
import banner6 from './../static/images/Banners-39.jpg';

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

const HomePage = () => {
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
    </MainLayout>
  );
};

export default HomePage;
