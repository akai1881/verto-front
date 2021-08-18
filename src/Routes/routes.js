import CompanyRegister from 'pages/CompanyRegister/CompanyRegister';
import Goods from 'pages/Goods/Goods';
import HomePage from 'pages/Home/HomePage';
import LoginPage from 'pages/Login/LoginPage';
import ProductsDetail from 'pages/ProductsDetail/ProductsDetail';
import RegisterPage from 'pages/Register/RegisterPage';
import CartPage from "../pages/CartPage/CartPage";
import {
  CART_ROUTE,
  COMPANY_REGISTER,
  GOODS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_DETAILS,
  REGISTER_ROUTE,
} from '../utils/consts';

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
  {
    path: LOGIN_ROUTE,
    exact: true,
    name: 'Логин',
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    exact: true,
    name: 'Регистрация',
    Component: RegisterPage,
  },
  {
    path: COMPANY_REGISTER,
    exact: true,
    name: 'Регистрация компании',
    Component: CompanyRegister,
  },
  {
    path: PRODUCT_DETAILS,
    exact: true,
    name: 'Детали продукта',
    Component: ProductsDetail,
  },
  {
    path: CART_ROUTE,
    exact: true,
    name: 'Корзина',
    Component: CartPage,
  },
];
