import React, { useEffect } from 'react';
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
    title: 'Аукционы',
    active: false,
    path: '/auctions',
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
    path: '/goods/verto-car/legkovye/avto-i-zapchasti',
  },
  {
    id: 6,
    title: 'Дом и сад',
    active: false,
    path: '/goods/verto-home/vse-dlja-doma/dom-i-sad',
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
    path: '/goods/verto-clothes/man/odezhda-i-obuv',
  },
  {
    id: 9,
    title: 'Красота и здоровье',
    active: false,
    path: '/goods/verto-beauty/maski/krasota-i-zdorove',
  },
  {
    id: 10,
    title: 'Горячие предложения',
    active: false,
    path: '/hot-deals',
  },
];

const MenuBar = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <Container>
      <div className={styles.wrapper}>
        <Flex className={styles.linkFlex}>
          {mock.map(({ id, title, path }) => (
            <NavLink to={path} exact key={id} className={styles.link} activeClassName={styles.active}>
              {title}
            </NavLink>
          ))}
        </Flex>
      </div>
    </Container>
  );
};

export default MenuBar;
