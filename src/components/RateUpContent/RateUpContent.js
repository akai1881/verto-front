import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuHowToOrder from 'components/MenuHowToOrder/MenuHowToOrder';

const RateUpContent= () => {
    return (
        <>
        <Header/>
        <Container>
            <MenuHowToOrder/>
            как повысить рейтинг
        </Container>
        <Footer/>
            
        </>
    );
};

export default RateUpContent;