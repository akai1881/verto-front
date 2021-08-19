import React from 'react';

import Container from 'components/UI/Container';

import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuBarNews from 'components/MenuBarNews/MenuBarNews';

import Arrow from './images/arrow (2).png'

import './ContactsContent.scss';

const ContactsContent = () => {
    return (
        <>
        <Container>
            <Header />
            <MenuBarNews />
            <div className='contacts-title'>Контакты</div>
            <div className='contacts-map'>map</div>
            <div className='contacts-cards-email'>
                <div className='contacts-cards-email-item'>
                    <div>
                      <p>Обращения</p>
                      <span className='contacts-cards-email-item-intro'>Если у Вас возникли вопросы – напишите нам</span>
                    </div>
                    <button className='contacts-cards-email-item-btn-questions'>Частые вопросы</button>
                </div>
                <div className='contacts-cards-email-item'>
                    <div>
                      <p>Партнерам</p>
                      <span className='contacts-cards-email-item-intro'>Узнайте подробные условия для сотрудничества</span>
                    </div>
                    <div className='contacts-emails'>
                      <span>partners@getbyverto.com</span>
                      <img src={Arrow}/>
                    </div>
                </div>
                <div className='contacts-cards-email-item'>
                    <div>
                    <p>Официальные запросы</p>
                    <span className='contacts-cards-email-item-intro'>Для отправки или получения деловой документации</span>
                    </div>
                    <div className='contacts-emails'>
                      <span>sales@getbyverto.com</span>
                      <img src={Arrow}/>

                    </div>
                </div>
                <div className='contacts-cards-email-item'>
                    <div>
                    <p>Пресс <br /> служба</p>
                    <span className='contacts-cards-email-item-intro'>Для запросов СМИ и на участие в мероприятиях</span>
                    </div>
                    <div className='contacts-emails'>
                      <span>pr@getbyverto.com</span>
                      <img src={Arrow}/>

                    </div>
                </div>
            </div>
            <div className='contacts-addresses'>
                <div className='contacts-addresses-card'>
                    <p>Юридический адреc</p>
                    <div className='contacts-addresses-card-info'>+7 700 0000 000 <br />
                         +7 327 00 00 00 <br />
                         mail@getbyverto.com <br />
                         Республика Казахстан, г. Алматы, <br />
                         пр. Аль Фараби, 00
                    </div>
                </div>
                <div className='contacts-addresses-card'>
                    <p>Реквизиты</p>
                    <div className='contacts-addresses-card-info'>ИНН/КПП 3702168480/370201001 <br />
                         ОГРН 1163702083357 <br />
                         БАНК ОТДЕЛЕНИЕ N 8639 ПАО СБЕРБАНК <br />
                         Р/счет 40702.810.9.17000016561 <br />
                         Кор/счет 30101.810.0.00000000608 <br />
                         БИК 042406608
                    </div>
                    <div className='contacts-addresses-card-download-btn'>
                     <span>Скачать реквизиты</span>
                     <img src={Arrow}/>
                    </div>
                </div>
            
            </div>
        </Container>
        <Footer/>
            
        </>
    );
};

export default ContactsContent;