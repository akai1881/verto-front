import React from 'react';
import Flex from 'components/UI/Flex';
import styles from './_menubar.module.scss';
import Container from 'components/UI/Container';
import { NavLink } from 'react-router-dom';

const mock = [
  {
    id: 1,
    title: 'Главная',
    active: true,
    path: '/',
  },
  {
    id: 2,
    title: 'Cохранено',
    active: false,
    path: '/saved',
  },
  {
    id: 3,
    title: 'Электроника',
    active: false,
    path: '/electronics',
  },
  {
    id: 4,
    title: 'Строительство',
    active: false,
    path: '/building',
  },
  {
    id: 5,
    title: 'Авто и мото',
    active: false,
    path: '/auto-and-moto',
  },
  {
    id: 6,
    title: 'Дом и сад',
    active: false,
    path: '/house-and-kindergarden',
  },
  {
    id: 7,
    title: 'Спорт и отдых',
    active: false,
    path: '/sport-and-relaxation',
  },
  {
    id: 8,
    title: 'Одежда и обувь',
    active: false,
    path: '/clothes-and-shoes',
  },
  {
    id: 9,
    title: 'Красота и здоровье',
    active: false,
    path: '/beauty-and-helth',
  },
  {
    id: 10,
    title: 'Горячие предложения',
    active: false,
    path: '/hot-deals',
  },
];

const MenuBar = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Flex>
          {mock.map(({ id, title, path }) => (
            <NavLink
              to={path}
              exact
              key={id}
              className={styles.link}
              activeClassName={styles.active}
            >
              {title}
            </NavLink>
          ))}
        </Flex>
      </div>
    </Container>
  );
};

export default MenuBar;
