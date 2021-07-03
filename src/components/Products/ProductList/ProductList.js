import { Col, Row } from 'antd';
import React from 'react';
import Card from '../ProductCard/Card';

import card1 from './../../../static/images/s-l500 (5).jpg';
import card2 from './../../../static/images/s-l1600 (2).jpg';
import card3 from './../../../static/images/s-l1600 (14).jpg';
import card4 from './../../../static/images/s-l1600.jpg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodsByCategory } from 'store/slices/productsSlice';
import { useParams } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';

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
  {
    id: 1123513241235,
    title:
      'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM) sdafdsafds dsafdsf',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    img: card1,
  },
  {
    id: 231512352,
    title: 'Лимон Мейер плоды',
    status: false,
    min_purchase: 25,
    unity: 'кв.м',
    img: card2,
  },
  {
    id: 1234125341323,
    title: 'Мозаичная плитка для кухни, ванной комнаты',
    status: true,
    min_purchase: 10,
    unity: 'кв.м',
    img: card3,
  },
  {
    id: 1235231514,
    title: 'New Balance 574 кроссовки',
    status: true,
    min_purchase: 3,
    unity: 'партии',
    img: card4,
  },
  {
    id: 123512341,
    title:
      'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM) sdafdsafds dsafdsf',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    img: card1,
  },
  {
    id: 2123512341325,
    title: 'Лимон Мейер плоды',
    status: false,
    min_purchase: 25,
    unity: 'кв.м',
    img: card2,
  },
  {
    id: 1235123412353,
    title: 'Мозаичная плитка для кухни, ванной комнаты',
    status: true,
    min_purchase: 10,
    unity: 'кв.м',
    img: card3,
  },
  {
    id: 412353215,
    title: 'New Balance 574 кроссовки',
    status: true,
    min_purchase: 3,
    unity: 'партии',
    img: card4,
  },
  {
    id: 123213441323,
    title: 'Мозаичная плитка для кухни, ванной комнаты',
    status: true,
    min_purchase: 10,
    unity: 'кв.м',
    img: card3,
  },
  {
    id: 1235231612343215215514,
    title: 'New Balance 574 кроссовки',
    status: true,
    min_purchase: 3,
    unity: 'партии',
    img: card4,
  },
  {
    id: 123515112341,
    title:
      'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM) sdafdsafds dsafdsf',
    status: true,
    min_purchase: 5,
    unity: 'шт',
    img: card1,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const products = useSelector(({ products }) => products.products.data);

  useEffect(() => {
    dispatch(fetchGoodsByCategory(params.categoryName));
  }, [params]);

  // useEffect(() => {
  //   console.log(products);
  // }, [products, params]);

  return (
    <Row gutter={[30, 30]}>
      {products.length > 0 ? (
        products.map((item) => (
          <Col key={item.id} span={8}>
            <Card item={item} />
          </Col>
        ))
      ) : (
        <Title level={2}>Товары отсутсвуют...</Title>
      )}
    </Row>
  );
};

export default ProductList;
