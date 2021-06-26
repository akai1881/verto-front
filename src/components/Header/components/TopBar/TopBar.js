import React from 'react';
import Flex from '../../../UI/Flex';
import CitySwitcher from '../CitySwitcher/CitySwitcher';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import NavMenu from '../NavMenu/NavMenu';
import styles from './_topbar.module.scss';
import Container from '../../../UI/Container';

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex align="center">
          <CitySwitcher />
          <NavMenu />
          <LangSwitcher />
        </Flex>
      </Container>
    </div>
  );
};

export default TopBar;
