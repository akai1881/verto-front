import React from 'react';

import CategoryModal from 'components/CategoryModal';
import MobileMenu from 'components/MobileMenu';
import Header from '../components/Header';
import Container from '../components/UI/Container';
import Footer from './../components/Footer';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const MainLayout = ({ children }) => {
  const open = useSelector(({ modal }) => modal.isMobile);

  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <Container>{children}</Container>
      </div>
      <Footer />
      <CategoryModal />
      <CSSTransition in={open} classNames="mobile-menu" unmountOnExit timeout={500}>
        <MobileMenu />
      </CSSTransition>
    </div>
  );
};

export default MainLayout;
