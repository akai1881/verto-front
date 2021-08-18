import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuBarNews from 'components/MenuBarNews/MenuBarNews';
import Container from 'components/UI/Container';
import React from 'react';

import './RewiewsContent.scss';

const RewiewsContent = () => {
    let reviews = false;
    return (
        <>
        <Container>
            <Header/>
            <MenuBarNews/>
            <div className='rewiwes-title'>
                <div>
                <span>Отзывы и оценки</span>
                <p>Только честные отзывы настоящих покупателей</p>
                </div>
            </div>
            <hr />
            { reviews?             <div className='all-reviews'>
            </div>
: (<div><div className='all-reviews-is-empty'><span>Отзывов ещё нет — ваш может стать первым</span>
<br />
<button>Написать отзыв</button></div></div>)}
        </Container>
            <Footer/>
        </>
    );
};

export default RewiewsContent;