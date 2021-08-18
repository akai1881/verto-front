import React from 'react';
// import Flex from 'components/UI/Flex';
// import styles from './MenuBarNews.scss';
import Container from 'components/UI/Container';
import { NavLink } from 'react-router-dom';

import './MenuBarNews.css';

const mock = [
  {
    id: 1,
    title: 'О нас',
    active: true,
    path: '/about-us',
  },
  {
    id: 2,
    title: 'Новости',
    active: false,
    path: '/news',
  },
  {
    id: 3,
    title: 'Отзывы',
    active: false,
    path: '/reviews',
  },
  {
    id: 4,
    title: 'Контакты',
    active: false,
    path: '/contacts',
  },
];

const MenuBarNews = () => {
  return (
    <Container>
      <div>
        <div className='menu-bar-news'>
          {mock.map(({ id, title, path, active }) => (
            <NavLink to={path} exact className={window.location.pathname === path ?'menu-bar-news-item-active': 'menu-bar-news-item' } key={id}>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MenuBarNews;
