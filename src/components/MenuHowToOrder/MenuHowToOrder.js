import React from 'react';
// import Flex from 'components/UI/Flex';
// import styles from './MenuBarNews.scss';
import Container from 'components/UI/Container';
import { NavLink } from 'react-router-dom';

import './MenuHowToOrder.scss';

const mock = [
  {
    id: 1,
    title: 'Как сделать заказ',
    path: '/how-to-order',
  },
  {
    id: 2,
    title: 'Условия регистрации',
    path: '/register-rules',
  },
  {
    id: 3,
    title: 'Спорные вопросы',
    path: '/questions',
  },
  {
    id: 4,
    title: 'Правила использования платформы',
    path: '/rules',
  },
  {
    id: 5,
    title: 'Как повысить ваш рейтинг',
    path: '/rate-up',
  },
  {
    id: 6,
    title: 'Доставка',
    path: '/delivery',
  },
];

const MenuHowToOrder = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []) 
  return (
    <Container>
      <div>
        <div className='menu-bar-news'>
          {mock.map(({ id, title, path, active }) => (
            <NavLink to={path} exact className={window.location.pathname === path  ?'menu-bar-news-item-active': 'menu-bar-news-item' } key={id}>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MenuHowToOrder;
