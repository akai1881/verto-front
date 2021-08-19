import React from 'react';

import { Rate } from 'antd';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuBarNews from 'components/MenuBarNews/MenuBarNews';

import './RewiewsContent.scss';

const RewiewsContent = () => {
    const [ showFormAddReview, setShowFormAddReview ] = React.useState(false);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [rateVal, setRateVal] = React.useState(5);
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
            { reviews? <div className='all-reviews'></div> : (<div><div className='all-reviews-is-empty'><span>Отзывов ещё нет — ваш может стать первым</span> <br /> <button onClick={() => setShowFormAddReview(!showFormAddReview)}>Написать отзыв</button></div></div>)}    
            <div>{showFormAddReview ? (
                <div>
                <div className='add-review-title'>Оставьте отзыв о нас!</div>
                <div className='add-review-rate-title'>Качество товара или услуги</div>
                <div className='add-review-rate-value'>
                   <Rate style={{color: 'red'}} tooltips={desc} onChange={(e) => setRateVal(e)} value={rateVal} />
                </div>
                <div className='add-review-form'>
                    <label>Адрес электронной почты</label>
                    <input/>
                    <label>Ваше имя</label>
                    <input/>
                    <label>Достоинства</label>
                    <textarea className='add-review-form-big-inp'/>
                    <label>Недостатки</label>
                    <textarea className='add-review-form-big-inp'/>
                    <label>Комментарий</label>
                    <textarea className='add-review-form-big-inp'/>
                    <label>Галлерея изображения</label>
                    <label htmlFor='add-review-form-inp-file' className='add-review-form-inp-file'>Выберите изображение</label>
                    <input style={{display: 'none'}} id='add-review-form-inp-file' type='file'/>
                    <label>Персональные данные</label>
                    <span>Нажимая на кнопку Отправить, вы соглашаетесь на обработку персональных данных</span>
                    <button>Отправить</button>
                </div>
              </div>
            ): null}</div>
            
           
          </Container>
         <Footer/>
        </>
    );
};

export default RewiewsContent;