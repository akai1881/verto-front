import React from 'react';
import Flex from 'components/UI/Flex';
import styles from './_tool.module.scss';
import { Menu, Dropdown } from 'antd';
import { ReactComponent as ProfileIcon } from './../../../../static/icons/profile.svg';
import { ReactComponent as HeartIcon } from './../../../../static/icons/heart.svg';
import { ReactComponent as EyeIcon } from './../../../../static/icons/eye.svg';
import { ReactComponent as BagIcon } from './../../../../static/icons/bag.svg';
import { Tooltip } from 'antd';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout, userSelector } from 'store/slices/userSlice';
import { Link } from 'react-router-dom';

const { Option } = Select;

const mock = [
  {
    id: 1,
    Icon: ProfileIcon,
    title: 'Профиль',
  },
  {
    id: 2,
    Icon: EyeIcon,
    title: 'Просмотренные',
  },
  {
    id: 3,
    Icon: HeartIcon,
    title: 'Избранное',
  },
  {
    id: 4,
    Icon: BagIcon,
    title: 'Корзина',
  },
];

const Tools = () => {
  const { isAuth } = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickLogin = (title) => {
    if (title !== 'Профиль') {
      return;
    }

    history.push('/login');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu>
      {isAuth ? (
        <Menu.Item key="0" onClick={handleLogout}>
          Выйти
        </Menu.Item>
      ) : (
        <>
          <Menu.Item key="1">
            <Link to="/login">Войти</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/register">Регистрация</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  return (
    <Flex align="center">
      {mock.map(({ id, Icon, title }) => {
        if (title === 'Профиль') {
          return (
            <Dropdown overlay={menu} trigger={['click']} key={id}>
              <Tooltip key={id} placement="top" title={title}>
                <div key={id} className={styles.tool}>
                  <Icon />
                </div>
              </Tooltip>
            </Dropdown>
          );
        } if(title === 'Корзина'){
          return (            <Tooltip key={id} placement="top" title={title}>
          <div key={id} className={styles.tool}>
            <Link to='/cart'><Icon /></Link>
          </div>
        </Tooltip>
)
        }
        else {
          return (
            <Tooltip key={id} placement="top" title={title}>
              <div key={id} className={styles.tool}>
                <Icon />
              </div>
            </Tooltip>
          );
        }
      })}
    </Flex>
  );
};

export default Tools;
