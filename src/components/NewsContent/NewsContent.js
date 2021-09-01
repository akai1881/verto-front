import React from 'react';

import Arrow from './images/arrow.png';
// import AllNewsImg1 from './images/all- news-1.png';
// import AllNewsImg2 from './images/all- news-2.png';
// import AllNewsImg3 from './images/all- news-3.png';
// import AllNewsImg4 from './images/all- news-4.png';
// import AllNewsImg5 from './images/all- news-4-1.png';

import './NewsContent.scss';
import { Pagination } from 'antd';
import MenuBarNews from 'components/MenuBarNews/MenuBarNews';
import { useHistory } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import { fetchNews, newsSelector } from 'store/slices/newsSlice';
import { useDispatch, useSelector } from 'react-redux';
import PreloadSpinner from 'components/UI/PreloadSpinner';

const NewsContent = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const news = useSelector(({news}) => news.news.data);
    React.useEffect(()=> {
        dispatch(fetchNews())
    },[])
    const {isLoading} = useSelector(newsSelector);
    // let newsExapmle = [
    //     {
    //         date: '21.02.21',
    //         title: 'Партнерство с известным брендом',
    //         desc: 'Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.',
    //         img: AllNewsImg5
    //     },
    //     {
    //         date: '21.02.21',
    //         title: 'Партнерство с известным брендом',
    //         desc: 'Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.',
    //         img: AllNewsImg4
    //     },
    //     {
    //         date: '21.02.21',
    //         title: 'Партнерство с известным брендом',
    //         desc: 'Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.',
    //         img: AllNewsImg3
    //     },
    //     {
    //         date: '21.02.21',
    //         title: 'Партнерство с известным брендом',
    //         desc: 'Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.',
    //         img: AllNewsImg2
    //     },
    //     {
    //         date: '21.02.21',
    //         title: 'Партнерство с известным брендом',
    //         desc: 'Across the breadth and depth of inventory, we continue to make the experience as smooth as possible from the moment sellers enter the marketplace.',
    //         img: AllNewsImg1
    //     },
    // ]
    return (
        <MainLayout>
            <MenuBarNews />
            {isLoading? <PreloadSpinner/>: null }
            <div className='rewiwes-title'><div><span>Все новости</span></div></div>
            <div className='all-news'>
                <p className='all-news-count'>{news?.length > 0 ? news.length + "статей": null}</p>
                {news?.length > 0 ? <>{news.map((item, index) => (
                                    <div key={index} className='all-news-item-card'>
                                    <img className='all-news-item-img' src={item.image}/>
                                    <div className='all-news-item-card-right'>
                                      <div>
                                         <span className='all-news-item-card-right-date'>{item.date}</span>
                                         <span className='all-news-item-card-right-date-border'>|</span>
                                         <span className='all-news-item-card-right-date-title'>Последние события</span>
                                      </div>
                                      <span className='all-news-item-card-right-partners'>{item.title}</span>
                               <p className='all-news-item-card-right-partners-info'>{item.description}</p>
                               <p className='all-news-read-button'  onClick={() => history.push(`/news/${item.id}`)}>Читать <img src={Arrow}/></p>
                                    </div>
                                </div>
                ))}
                <div className='all-news-pagination'><Pagination defaultCurrent={1} total={50} /></div>
</>: <div className="all-reviews-is-empty"><span>Пока новостей нет</span></div>}
            </div>
            </MainLayout>
    );
};

export default NewsContent;