import React from "react";

import Container from "components/UI/Container";

import Header from "../Header/index";
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
import Footer from "components/Footer";
import MenuBarNews from "components/MenuBarNews/MenuBarNews";
import AboutUsMap from "./AboutUsMap";

const AboutUsContent = () => {
  return (
    <>
      <Container>
        <Header />
        <MenuBarNews />
        <div>
          <img src={AboutUsImg} />
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
        <div className="about-us-latest-news">
          <div>
            <img src={LastestNews1} />
            <div>
              <p>Apple iPhone 11 Pro - 256GB - Gold A2215 </p>
              <span>
                Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
                iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
                Pro - 256GB - Gold A2215 (CDMA + GSM)
              </span>
              <img className="about-us-arrow" src={Arrow} />
            </div>
          </div>
          <div>
            <img src={LastestNews2} />
            <div>
              <p>Apple iPhone 11 Pro - 256GB - Gold A2215 </p>
              <span>
                Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
                iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
                Pro - 256GB - Gold A2215 (CDMA + GSM)
              </span>
              <img className="about-us-arrow" src={Arrow} />
            </div>
          </div>
          <div>
            <img src={LastestNews3} />
            <div>
              <p>Apple iPhone 11 Pro - 256GB - Gold A2215 </p>
              <span>
                Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
                iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
                Pro - 256GB - Gold A2215 (CDMA + GSM)
              </span>
              <img className="about-us-arrow" src={Arrow} />
            </div>
          </div>
          <div>
            <img src={LastestNews4} />
            <div>
              <p>Apple iPhone 11 Pro - 256GB - Gold A2215 </p>
              <span>
                Apple iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple
                iPhone 11 Pro - 256GB - Gold A2215 (CDMA + GSM)Apple iPhone 11
                Pro - 256GB - Gold A2215 (CDMA + GSM)
              </span>
              <img className="about-us-arrow" src={Arrow} />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUsContent;
