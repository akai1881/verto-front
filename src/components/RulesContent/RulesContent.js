import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuHowToOrder from 'components/MenuHowToOrder/MenuHowToOrder';

const RulesContent = () => {
    return (
        <>
        <Header/>
        <Container>
            <MenuHowToOrder/>
            правила использования платформы
        </Container>
        <Footer/>
            
        </>
    );
};

export default RulesContent;