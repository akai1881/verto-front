import React from 'react';

import Arrow from './images/arrow.png';
import AllNewsImg1 from './images/all- news-1.png';
import AllNewsImg2 from './images/all- news-2.png';
import AllNewsImg3 from './images/all- news-3.png';
import AllNewsImg4 from './images/all- news-4.png';
import AllNewsImg5 from './images/all- news-4-1.png';

import './NewsContent.scss';
import { Pagination } from 'antd';
import Container from 'components/UI/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MenuBarNews from 'components/MenuBarNews/MenuBarNews';
import { useHistory } from 'react-router-dom';

const NewsContent = () => {
    const history = useHistory();
    return (
       <> <Container>
            <Header/>
            <MenuBarNews />
            <div className='all-news-title'><span>Все новости</span></div>
            <div className='all-news' onClick={() => history.push('/news/1')}>
                <p className='all-news-count'>1 000  статей</p>
                <div className='all-news-item-card'>
                    <img className='all-news-item-img' src={AllNewsImg5}/>
                    <div className='all-news-item-card-right'>
                      <div>
                         <span className='all-news-item-card-right-date'>21.02.21</span>
                         <span className='all-news-item-card-right-date-border'>|</span>
                         <span className='all-news-item-card-right-date-title'>Последние события</span>
                      </div>
                      <span className='all-news-item-card-right-partners'>Партнерство с <br /> известным брендом</span>
               <p className='all-news-item-card-right-partners-info'>Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.</p>
               <p className='all-news-read-button'>Читать <img src={Arrow}/></p>
                    </div>
               
              
                </div>

                <div className='all-news-item-card'>
                    <img className='all-news-item-img' src={AllNewsImg1}/>
                    <div className='all-news-item-card-right'>
                      <div>
                         <span className='all-news-item-card-right-date'>21.02.21</span>
                         <span className='all-news-item-card-right-date-border'>|</span>
                         <span className='all-news-item-card-right-date-title'>Последние события</span>
                      </div>
                      <span className='all-news-item-card-right-partners'>Партнерство с <br /> известным брендом</span>
               <p className='all-news-item-card-right-partners-info'>Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.</p>
               <p className='all-news-read-button'>Читать <img src={Arrow}/></p>
                    </div>
               
              
                </div>
                <div className='all-news-item-card'>
                    <img className='all-news-item-img' src={AllNewsImg2}/>
                    <div className='all-news-item-card-right'>
                      <div>
                         <span className='all-news-item-card-right-date'>21.02.21</span>
                         <span className='all-news-item-card-right-date-border'>|</span>
                         <span className='all-news-item-card-right-date-title'>Последние события</span>
                      </div>
                      <span className='all-news-item-card-right-partners'>Партнерство с <br /> известным брендом</span>
               <p className='all-news-item-card-right-partners-info'>Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.</p>
               <p className='all-news-read-button'>Читать <img src={Arrow}/></p>
                    </div>
               
              
                </div>
                <div className='all-news-item-card'>
                    <img className='all-news-item-img' src={AllNewsImg3}/>
                    <div className='all-news-item-card-right'>
                      <div>
                         <span className='all-news-item-card-right-date'>21.02.21</span>
                         <span className='all-news-item-card-right-date-border'>|</span>
                         <span className='all-news-item-card-right-date-title'>Последние события</span>
                      </div>
                      <span className='all-news-item-card-right-partners'>Партнерство с <br /> известным брендом</span>
               <p className='all-news-item-card-right-partners-info'>Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.</p>
               <p className='all-news-read-button'>Читать <img src={Arrow}/></p>
                    </div>
               
              
                </div>
                <div className='all-news-item-card'>
                    <img className='all-news-item-img' src={AllNewsImg4}/>
                    <div className='all-news-item-card-right'>
                      <div>
                         <span className='all-news-item-card-right-date'>21.02.21</span>
                         <span className='all-news-item-card-right-date-border'>|</span>
                         <span className='all-news-item-card-right-date-title'>Последние события</span>
                      </div>
                      <span className='all-news-item-card-right-partners'>Партнерство с <br /> известным брендом</span>
               <p className='all-news-item-card-right-partners-info'>Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.</p>
               <p className='all-news-read-button'>Читать <img src={Arrow}/></p>
                    </div>
               
              
                </div>
                <div className='all-news-pagination'><Pagination defaultCurrent={1} total={50} /></div>
                
            </div>
            
        </Container>
        <Footer />
        </>
    );
};

export default NewsContent;