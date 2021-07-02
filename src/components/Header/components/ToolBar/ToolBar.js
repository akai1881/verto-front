import React from 'react';
import styles from './_toolbar.module.scss';
import Container from '../../../UI/Container';
import { ReactComponent as MenuIcon } from './../../../../static/icons/menu-toolbar.svg';
import logo from './../../../../static/images/Logo_198@2x.png';
import Flex from '../../../UI/Flex';
import Category from '../Category/Category';
import SearchInput from 'components/UI/SearchInput';
import Tools from '../Tools/Tools';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { setModalVisible } from 'store/slices/modalSlice';
import { Link } from 'react-router-dom';

const ToolBar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setModalVisible());
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Tooltip placement="left" title="Категории">
              <div className={styles.menu} onClick={handleOpenModal}>
                <MenuIcon />
              </div>
            </Tooltip>
            <Link to="/">
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
            </Link>
          </Flex>
          <Flex>
            <Category />
            <SearchInput radius={[0, 16, 16, 0]} />
          </Flex>
          <Tools />
        </Flex>
      </Container>
    </div>
  );
};

export default ToolBar;
