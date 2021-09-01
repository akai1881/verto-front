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
    path: '/about-us',
  },
  {
    id: 2,
    title: 'Новости',
    path: '/news',
  },
  {
    id: 3,
    title: 'Отзывы',
    path: '/reviews',
  },
  {
    id: 4,
    title: 'Контакты',
    path: '/contacts',
  },
];

const MenuBarNews = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
}, []) 
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
