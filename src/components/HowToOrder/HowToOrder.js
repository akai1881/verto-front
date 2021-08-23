import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuHowToOrder from 'components/MenuHowToOrder/MenuHowToOrder';

import img1 from './images/screen.png';

import './HowToOrder.scss';

const HowToOrder = () => {
    let steps = [
        {
            title: '1. Войти или зарегистрироваться',
            desc: 'Оформить заказ можно только в личном кабинете. Войдите или зарегистрируйтесь по электронной почте:',
            img: img1
        },
        {
            title: '2. Добавить товар в «Корзину»',
            desc: 'Оформить заказ можно только в личном кабинете. Войдите или зарегистрируйтесь по электронной почте:',
            img: img1
        },
        {
            title: '3. Перейти в корзину',
            desc: 'Оформить заказ можно только в личном кабинете. Войдите или зарегистрируйтесь по электронной почте:',
            img: img1
        },
        {
            title: '4. Проверить заказ',
            desc: 'Оформить заказ можно только в личном кабинете. Войдите или зарегистрируйтесь по электронной почте:',
            img: img1
        },

    ]
    return (
        <>
        <Header/>
        <Container>
            <MenuHowToOrder/>
            <div className='how-to-order-title'>Как сделать заказ</div>
            {steps.map((step) => (
            <div className='how-to-order-card'>
                <div className='how-to-order-card-title'>{step.title}</div>
                <div className='how-to-order-card-desc'>{step.desc}</div>
                <img src={step.img}/>
            </div>
            ))}
        </Container>
        <Footer/>
            
        </>
    );
};

export default HowToOrder;