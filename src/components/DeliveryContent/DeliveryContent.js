import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuHowToOrder from 'components/MenuHowToOrder/MenuHowToOrder';

const DeliveryContent= () => {
    return (
        <>
        <Header/>
        <Container>
            <MenuHowToOrder/>
            Доставка
        </Container>
        <Footer/>
            
        </>
    );
};

export default DeliveryContent;