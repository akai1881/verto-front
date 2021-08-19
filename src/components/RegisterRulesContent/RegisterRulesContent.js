import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuHowToOrder from 'components/MenuHowToOrder/MenuHowToOrder';

const RegisterRulesContent= () => {
    return (
        <>
        <Header/>
        <Container>
            <MenuHowToOrder/>
            Условия регистрации
        </Container>
        <Footer/>
            
        </>
    );
};

export default RegisterRulesContent;