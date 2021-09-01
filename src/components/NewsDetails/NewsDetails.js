import React from 'react';

import NewsDetailsImg from './images/newsdetails.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import Arrow from './images/arrow.svg';
import ArrowRight from './images/arrow-right.svg';
import ArrowLeft from './images/arrow-left.svg';

import './NewsDetails.scss';
import MainLayout from 'layouts/MainLayout';

const NewsDetails = ({history}) => {
    let similarNewsArr = [
        {
            title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 ',
            desc: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
            img: img1
        },
        {
            title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 ',
            desc: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
            img: img2
        },
        {
            title: 'Apple iPhone 11 Pro - 256GB - Gold A2215 ',
            desc: 'Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)',
            img: img1
        }
    ]
    return (
        <MainLayout>
                 <div className='newDetails-breadcrumbs'>
                   <div className='newDetails-breadcrumbs-item' onClick={() => history.push('/')}>Главная</div>
                   <div className='newDetails-breadcrumbs-item' onClick={() => history.push('/news')}>Все новости</div>
                   <div className='newDetails-breadcrumbs-item-active'>Новость 208</div>
                 </div>
                 <div className='newDetails-content'>
                     <div className='newDetails-content-card'>
                         <div className='newDetails-content-card-date'>
                             <span className='newDetails-content-card-date-span1'>21.02.21</span>
                             <span className='newDetails-content-card-date-span2'>|</span>
                             <span className='newDetails-content-card-date-span3'>Последние события</span>
                         </div>
                         <div className='newDetails-content-card-title'>Партнерство с известным брендом</div>
                         <div className='newDetails-content-card-author'>Иван Иванов, журналист издания "КазПравда"</div>
                         <div className='newDetails-content-card-content'>As an enthusiastic ambassador of our company culture, eBay employee Henry De Sousa champions our impact-driven work on the Swiss team.</div>
                         <img className="newDetails-content-card-img" src={NewsDetailsImg}/>
                         <div className="newDetails-content-card-desc1">Our employees represent a mosaic of thoughts, backgrounds and personalities across the world. This series shares the voices of employees as they tell their own eBay stories.eBay employee Henry De Sousa is a champion of our impact-driven efforts to make a difference in the world and establish eBay as a truly special place to work in Europe and around the globe. Driven by a lifelong passion to help others, he heads a number of employee volunteer efforts in our Switzerland office, including our Swiss Global Impact Team, which organizes local volunteering and giving initiatives.</div>
                         <div className="newDetails-content-card-desc2"> Currently, Henry is working with a nonprofit to connect eBay volunteers to local entrepreneurs from migrant communities in a mentorship program. In addition to his work as an executive assistant to our EU chief financial officer, Henry is dedicated to developing the next generation of our workforce and fostering diversity, equity and inclusion efforts. He steers our EU finance internship program and leads our Swiss United in Pride chapter and global Movember event programming to raise mental health awareness. By leading these impact-driven initiatives, Henry exemplifies our company’s purpose to empower people and create economic opportunity. We recently sat down with him to discuss his work over the past four years — and how he manages to find time for it all.Why are you so passionate about volunteering and service-oriented work at eBay?My love for community work comes from a variety of different places: my family, friends, school, church. Community service has been part of my life since my childhood in Brazil, when I would serve hot soup to folks who were impacted by monsoons, participate in charity singing events and go door-to-door collecting donations of rice to create care packages for people in need. I think we can always do more to help improve other people’s lives. If we have the opportunity and the means to empower our communities, why shouldn’t we? It’s this same passion that inspires me to encourage others as well, to identify their own passions and fold those issues — environmental conservation, animal welfare, poverty, migration — into the work of our Global Impact Teams at eBay. Over the past year, you’ve played a large role in rallying our Swiss colleagues to mentor entrepreneurs served by our eBay Global Give grantee, Capacity, which works to support migrant families and refugee communities. Can you share more about the mentorship program, and why it is important?The Swiss Impact Team and our wider employee base really fell in love with Capacity as a charity whose main objective is to empower and enable entrepreneurialism among migrant and displaced communities; we had over 30 eBay colleagues join our informational session with Capacity. Capacity embodies eBay’s commitment to giving back to the community by supporting migrants who are eager to restart their lives and become entrepreneurs, and this resonates a lot with our employees, who have helped select Capacity as a Global Give grantee for the past two years. The mentorship program is structured in phases, with the first phase being centered around getting to know our mentees, learning about their ambitions and sharing our own experiences to help them innovate their business models. The second phase entails formal coaching in areas like creative thinking, planning and organization, communications and financial modeling. Right now, Capacity is entering into this second phase, so we will be providing background support for the next couple of months until our entrepreneurs are ready to hit the market. </div>
                     </div>
                     <div className='newDetails-content-similar-news'>
                         <div className='newDetails-content-similar-news-title'>Похожие статьи</div>
                         <div className='newDetails-content-similar-news-list'>
                             {similarNewsArr.map((item ) => ( 
                             <div className='newDetails-content-similar-news-list-item'>
                                 <img src={item.img}/>
                                 <div>
                                     <p>{item.title}</p>
                                     <span>{item.desc}</span>
                                     <img className='about-us-arrow' src={Arrow}/>
                                 </div>
                            </div>))}

                         </div>

                     </div>
                 </div>
                 <div className='newsDetails-buttons'>
                     <img className='newsDetails-buttons-left-img' src={ArrowLeft}/>
                     <button className='newsDetails-buttons-left-btn'>Предыдущая статья</button>
                     <button className='newsDetails-buttons-right-btn'>Следующая статья</button>
                     <img className='newsDetails-buttons-right-img' src={ArrowRight}/>
                 </div>
                 </MainLayout>
    );
};

export default NewsDetails;