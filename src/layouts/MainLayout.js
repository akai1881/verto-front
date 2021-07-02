import CategoryModal from 'components/CategoryModal';
import React from 'react';
import Header from '../components/Header';
import Container from '../components/UI/Container';
import Footer from './../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <Container>{children}</Container>
      </div>
      <Footer />
      <CategoryModal />
    </div>
  );
};

export default MainLayout;
