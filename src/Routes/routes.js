import AboutUsContent from "components/AboutUsContent/AboutUsContent";
import ContactsContent from "components/ContactsContent/ContactsContent";
import DeliveryContent from "components/DeliveryContent/DeliveryContent";
import FaqPage from "components/FaqPage/FaqPage";
import HowToOrder from "components/HowToOrder/HowToOrder";
import NewsContent from "components/NewsContent/NewsContent";
import NewsDetails from "components/NewsDetails/NewsDetails";
import QuestionsContent from "components/QuestionsContent/QuestionsContent";
import RateUpContent from "components/RateUpContent/RateUpContent";
import RegisterRulesContent from "components/RegisterRulesContent/RegisterRulesContent";
import RewiewsContent from "components/RewiesContent/RewiewsContent";
import RulesContent from "components/RulesContent/RulesContent";
import CompanyRegister from "pages/CompanyRegister/CompanyRegister";
import Goods from "pages/Goods/Goods";
import HomePage from "pages/Home/HomePage";
import LoginPage from "pages/Login/LoginPage";
import ProductsDetail from "pages/ProductsDetail/ProductsDetail";
import RegisterPage from "pages/Register/RegisterPage";
import CartPage from "../pages/CartPage/CartPage";
import {
  CART_ROUTE,
  COMPANY_REGISTER,
  GOODS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_DETAILS,
  REGISTER_ROUTE,
  ABOUT_US_ROUTE,
  NEWS_ROUTE,
  REVIEWS_ROUTE,
  CONTACTS_ROUTE,
  FAQ_ROUTE,
  NEWS_DETAILS_ROUTE,
  HOW_TO_ORDER_ROUTE,
  REGISTER_RULES_ROUTE,
  RULES_ROUTE,
  DELIVERY_ROUTE,
  RATE_UP_ROUTE,
  QUESTIONS_ROUTE,
} from "../utils/consts";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    exact: true,
    name: "Главная",
    Component: HomePage,
  },
  {
    path: GOODS_ROUTE,
    exact: true,
    name: "Категории",
    Component: Goods,
  },
  {
    path: LOGIN_ROUTE,
    exact: true,
    name: "Логин",
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    exact: true,
    name: "Регистрация",
    Component: RegisterPage,
  },
  {
    path: COMPANY_REGISTER,
    exact: true,
    name: "Регистрация компании",
    Component: CompanyRegister,
  },
  {
    path: PRODUCT_DETAILS,
    exact: true,
    name: "Детали продукта",
    Component: ProductsDetail,
  },
  {
    path: CART_ROUTE,
    exact: true,
    name: "Корзина",
    Component: CartPage,
  },
  {
    path: ABOUT_US_ROUTE,
    exact: true,
    name: "О нас",
    Component: AboutUsContent,
  },
  {
    path: NEWS_ROUTE,
    exact: true,
    name: "Новости",
    Component: NewsContent,
  },
  {
    path: NEWS_DETAILS_ROUTE,
    exact: true,
    name: "Детали новостей",
    Component: NewsDetails,
  },
  {
    path: REVIEWS_ROUTE,
    exact: true,
    name: "Отзывы",
    Component: RewiewsContent,
  },
  {
    path: CONTACTS_ROUTE,
    exact: true,
    name: "Контакты",
    Component: ContactsContent,
  },
  {
    path: FAQ_ROUTE,
    exact: true,
    name: "Часто Задаваемые Вопросы",
    Component: FaqPage,
  },
  {
    path: HOW_TO_ORDER_ROUTE,
    exact: true,
    name: "Как сделать заказ",
    Component: HowToOrder,
  },
  {
    path: REGISTER_RULES_ROUTE,
    exact: true,
    name: "Условия регистрации",
    Component: RegisterRulesContent,
  },
  {
    path: RULES_ROUTE,
    exact: true,
    name: "Правила использования платформы",
    Component: RulesContent
  },
  {
    path: RATE_UP_ROUTE,
    exact: true,
    name: "Как повысить рейтинг",
    Component: RateUpContent,
  },
  {
    path: DELIVERY_ROUTE,
    exact: true,
    name: "Доставка",
    Component: DeliveryContent,
  },
  {
    path: QUESTIONS_ROUTE,
    exact: true,
    name: "Спорные вопросы",
    Component: QuestionsContent,
  },
];
