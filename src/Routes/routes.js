import Goods from 'pages/Goods/Goods';
import HomePage from 'pages/Home/HomePage';
import { GOODS_ROUTE, HOME_ROUTE } from '../utils/consts';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    exact: true,
    name: 'Главная',
    Component: HomePage,
  },
  {
    path: GOODS_ROUTE,
    exact: true,
    name: 'Категории',
    Component: Goods,
  },
];
