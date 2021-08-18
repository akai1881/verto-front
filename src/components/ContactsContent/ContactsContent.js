import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuBarNews from 'components/MenuBarNews/MenuBarNews';

const ContactsContent = () => {
    return (
        <>
        <Container>
            <Header />
            <MenuBarNews />
            <div className='contacts-title'>Контакты</div>
        </Container>
        <Footer/>
            
        </>
    );
};

export default ContactsContent;