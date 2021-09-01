import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuBarNews from "components/MenuBarNews/MenuBarNews";
import AboutUsMap from "./AboutUsMap";
import MainLayout from "layouts/MainLayout";

import { fetchNews } from "store/slices/newsSlice";

import AboutUsImg from "./images/aboutUs.svg";
import AboutUsImg1 from "./images/about-us-1-img.png";
import AboutUsImg2 from "./images/about-us-2-img.png";
import AboutUsImg3 from "./images/about-us-3-img.png";

import LastestNews1 from "./images/lastest-news-1.png";
import LastestNews2 from "./images/lastest-news-2.png";
import LastestNews3 from "./images/lastest-news-3.png";
import LastestNews4 from "./images/lastest-news-4.png";

import Arrow from "./images/arrow.svg";


import "./styles.scss";

const AboutUsContent = () => {
  const dispatch = useDispatch();
  const news = useSelector(({news}) => news.news.data);
  React.useEffect(()=> {
      dispatch(fetchNews())
  },[])
  let example = [
    {
      title: "Apple iPhone 11 Pro - 256GB - Gold A2215 ",
      description: `Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
      iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
      Pro - 256GB - Gold A2215 (CDMA + GSM)`,
      image: LastestNews1
    },
    {
      title: "Apple iPhone 11 Pro - 256GB - Gold A2215 ",
      description: `Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
      iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
      Pro - 256GB - Gold A2215 (CDMA + GSM)`,
      image: LastestNews2
    },
    {
      title: "Apple iPhone 11 Pro - 256GB - Gold A2215 ",
      description: `Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
      iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
      Pro - 256GB - Gold A2215 (CDMA + GSM)`,
      image: LastestNews3
    },
    {
      title: "Apple iPhone 11 Pro - 256GB - Gold A2215 ",
      description: `Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
      iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
      Pro - 256GB - Gold A2215 (CDMA + GSM)`,
      image: LastestNews4
    },
  ]
  console.log('news', news);
  return (
    <MainLayout>
        <MenuBarNews />
        <div>
          <img className="about-us-content-img" src={AboutUsImg} />
        </div>
        <div className="about-us-content">
          <div>
            <span>15 тыс +</span>
            <p>компаний на сайте</p>
          </div>
          <div>
            <span>50 тыс +</span>
            <p>посетителей в сутки</p>
          </div>
          <div>
            <span>120 +</span>
            <p>сделок в день</p>
          </div>
          <div>
            <span>12 млн +</span>
            <p>товаров на сайте</p>
          </div>
        </div>
        <p className="about-us-title">Наши преимущества</p>
        <div className="about-us-images">
          <div>
            <img src={AboutUsImg1} />
            <span>более 15%</span>
            <span>Lorem Ipsum Dolores Se</span>
          </div>
          <div>
            <img src={AboutUsImg2} />
            <span>100% гарантия</span>
            <span>Lorem Ipsum Dolores Se</span>
          </div>
          <div>
            <img src={AboutUsImg3} />
            <span>до 1 млн ₸</span>
            <span>Lorem Ipsum Dolores Se</span>
          </div>
        </div>
        <div className="about-us-title">География</div>
          <AboutUsMap />
        <div className="about-us-title">Последние новости</div>
        {news?.length > 0 ? null : <div className='all-reviews-is-empty'><span>Пока новостей нет</span></div>}
        <div className="about-us-latest-news">
          {news?.length > 0 ? news.map((item, index) => (<div key={index} className="about-us-latest-news-card">
            <img className="about-us-latest-news-img" src={item.image} />
            <div>
              <p>{item.title}</p>
              <span>
                {item.description}
              </span>
              <img className="about-us-arrow" src={Arrow} />
            </div>
          </div>
)): null}
        </div>
    </MainLayout>
  );
};

export default AboutUsContent;
