import { Col, Row } from 'antd';
import React from 'react';
import Card from '../ProductCard/Card';

import card1 from './../../../static/images/s-l500 (5).jpg';
import card2 from './../../../static/images/s-l1600 (2).jpg';
import card3 from './../../../static/images/s-l1600 (14).jpg';
import card4 from './../../../static/images/s-l1600.jpg';

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

const ProductList = ({ data }) => {
  return (
    <Row gutter={[30, 30]}>
      {popular.map((item) => (
        <Col key={item.id} span={8}>
          <Card item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
