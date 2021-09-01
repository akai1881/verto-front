import React from 'react';
import styles from './_toolbar.module.scss';
import Container from '../../../UI/Container';
import { ReactComponent as MenuIcon } from './../../../../static/icons/menu-toolbar.svg';
import { ReactComponent as CloseIcon } from './../../../../static/icons/24_Close 2.svg';
import logo from './../../../../static/images/Logo_198@2x.png';
import Flex from '../../../UI/Flex';
import Category from '../Category/Category';
import SearchInput from 'components/UI/SearchInput';
import Tools from '../Tools/Tools';
import { Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setMobile, setModalVisible } from 'store/slices/modalSlice';
import { Link } from 'react-router-dom';
import AutoCompleteSearch from 'components/AutoCompleteSearch.js';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';

const ToolBar = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const openMobile = useSelector(({ modal }) => modal.isMobile);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    if (!isMobile) {
      dispatch(setModalVisible());
    } else {
      dispatch(setMobile(!openMobile));
    }
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex
          align="center"
          justify="space-between"
          className={styles.toolbarFlex}
        >
          <Flex align="center">
            <Tooltip placement="left" title="Категории">
              <div className={styles.menu} onClick={handleOpenModal}>
                {openMobile ? <CloseIcon /> : <MenuIcon />}
              </div>
            </Tooltip>
            <Link to="/">
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
            </Link>
          </Flex>
          <Flex className={styles.toolbarMiddle}>
            {!isMobile && <Category />}
            <SearchInput
              radius={[!isMobile ? 0 : 16, 16, 16, !isMobile ? 0 : 16]}
            />
            <AutoCompleteSearch />
          </Flex>
          {!openMobile && <Tools />}
        </Flex>
      </Container>
    </div>
  );
};

export default ToolBar;
