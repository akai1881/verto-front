import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import MenuItem from './components/MenuItem';
import styles from './_mobilemenu.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { setMobile } from 'store/slices/modalSlice';
import { ReactComponent as ChevronRight } from './../../static/icons/chevron-right.svg';
import { ReactComponent as ChevronRightRed } from './../../static/icons/chevron-right-red.svg';
import { ReactComponent as ChevronBlack } from './../../static/icons/arro-black.svg';
import { fetchCategories } from 'store/slices/productsSlice';

const mock = [
  {
    id: 1,
    title: 'О нас',
    path: '/about',
  },
  {
    id: 2,
    title: 'Новости',
    path: '/news',
  },
  {
    id: 3,
    title: 'Контакты',
    path: '/contacts',
  },
  {
    id: 4,
    title: 'Как сделать заказ',
    path: '/order_faq',
  },
  {
    id: 5,
    title: 'Условия регистрации',
    path: '/registration_conditions ',
  },
  {
    id: 6,
    title: 'Спорные вопросы',
    path: '/issues',
  },
  {
    id: 7,
    title: 'Правила использования платформы',
    path: '/rules',
  },
  {
    id: 8,
    title: 'Как повысить ваш рейтинг',
    path: '/rating_increase',
  },
  {
    id: 9,
    title: 'Вопросы и ответы',
    path: '/faq ',
  },
  {
    id: 10,
    title: 'Доставка',
    path: '/delivery',
  },
  {
    id: 13,
    title: 'Личный кабинет',
    path: '/personal ',
  },
  {
    id: 14,
    title: 'Ваша локация',
    path: '/location',
  },
];

const MobileMenu = () => {
  const ref = useRef();
  const [activeMenu, setActiveMenu] = useState('main');
  const categories = useSelector(({ products }) => products.categories.data);
  const [features, setFeatures] = useState([]);
  const isAuth = useSelector(({ user }) => user.isAuth);
  const open = useSelector(({ modal }) => modal.isMobile);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const [subCategory, setSubcategory] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!open) {
      enableBodyScroll(ref.current);
      return;
    }
    disableBodyScroll(ref.current);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  const handleCategoryClick = (menu, item) => {
    setActiveMenu(menu);
    setCategory({
      title: item.title,
      index: item.index,
      active: true,
      slug: item.slug,
    });
  };

  const handleSubCategoryClick = (menu, item) => {
    setActiveMenu(menu);
    setSubcategory({
      title: item.title,
      index: item.index,
      active: true,
      slug: item.slug,
    });
  };

  const handleCategoryRemove = (menu, bool) => {
    setActiveMenu(menu);
    setTimeout(() => {
      if (menu === 'subcategories') {
        setSubcategory((prev) => ({ ...prev, active: bool }));
        return;
      }
      setCategory((prev) => ({ ...prev, active: bool }));
    }, 500); // TODO Make it dynamic using transition variables
  };

  const handleRedirect = (slug) => {
    dispatch(setMobile(false));
    history.push(`/goods/${category.slug}/${subCategory.slug}/${slug}`);
  };

  return (
    <div className={`${styles.wrapper}`} ref={ref}>
      <div className={styles.inner}>
        <CSSTransition in={activeMenu === 'main'} timeout={500} classNames="menu-primary" unmountOnExit>
          <div className="menu">
            <MenuItem
              goToMenu="categories"
              setActiveMenu={setActiveMenu}
              className={styles.nav}
              right={<ChevronRight />}
              activeRight={<ChevronRightRed />}
            >
              Каталог
            </MenuItem>
            <>
              {mock.map((item) => (
                // <Link key={item.id} to={item.path}>
                <MenuItem>{item.title}</MenuItem>
                // </Link>
              ))}
              {isAuth ? (
                // <Link to="/login">
                <MenuItem>Выйти</MenuItem>
              ) : (
                // </Link>
                <>
                  <Link to="/login">
                    <MenuItem>Войти</MenuItem>
                  </Link>
                  <Link to="/register">
                    <MenuItem>Регистрация</MenuItem>
                  </Link>
                </>
              )}
            </>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'categories'}
          timeout={500}
          classNames={`${category?.active ? 'menu-primary' : 'menu-secondary'}`}
          unmountOnExit
        >
          <div className={`menu`}>
            <MenuItem
              goToMenu="main"
              className={`${styles.nav} ${styles.navigationChevron}`}
              setActiveMenu={(menu) => setActiveMenu(menu)}
              left={<ChevronRightRed />}
            >
              Каталог
            </MenuItem>
            {categories.map((cat, index) => (
              <MenuItem
                key={cat.id}
                goToMenu="subcategories"
                isSubMenu
                item={cat}
                index={index}
                setActiveMenu={handleCategoryClick}
                right={<ChevronRight />}
                activeRight={<ChevronBlack />}
              >
                {cat.title}
              </MenuItem>
            ))}
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'subcategories'}
          timeout={500}
          classNames={`${subCategory?.active ? 'menu-primary' : 'menu-secondary'}`}
          unmountOnExit
        >
          <div className="menu">
            <MenuItem
              goToMenu="categories"
              className={`${styles.nav} ${styles.navigationChevron}`}
              setActiveMenu={(menu) => handleCategoryRemove(menu, false)}
              left={<ChevronRight />}
            >
              {category?.title}
            </MenuItem>
            {categories[category?.index]?.children.map((cat, index) => (
              <MenuItem
                key={cat.id}
                isSubMenu
                item={cat}
                goToMenu="catalog"
                index={index}
                right={<ChevronRight />}
                activeRight={<ChevronBlack />}
                setActiveMenu={handleSubCategoryClick}
              >
                {cat.title}
              </MenuItem>
            ))}
          </div>
        </CSSTransition>

        <CSSTransition in={activeMenu === 'catalog'} timeout={500} classNames="menu-secondary" unmountOnExit>
          <div className="menu">
            <MenuItem
              className={`${styles.nav} ${styles.navigationChevron}`}
              goToMenu="subcategories"
              setActiveMenu={(menu) => handleCategoryRemove(menu, false)}
              left={<ChevronRight />}
            >
              {subCategory?.title}
            </MenuItem>
            {categories[category?.index]?.children[subCategory?.index]?.children.map((cat, index) => (
              <MenuItem
                key={cat.id}
                goToMenu="subcategories"
                index={index}
                setActiveMenu={() => handleRedirect(cat.slug)}
              >
                {cat.title}
              </MenuItem>
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MobileMenu;
