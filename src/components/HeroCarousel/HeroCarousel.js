import React from 'react';
import { Carousel } from 'antd';
import styles from './_hero-carousel.module.scss';

import banner1 from './../../static/images/banner1.jpg';
import banner2 from './../../static/images/Сгруппировать 648.jpg';
import banner3 from './../../static/images/Сгруппировать 649.jpg';

const HeroCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel
        autoplay={true}
        className={styles.carousel}
        dots={{ className: 'dots' }}
      >
        <div className={styles.item}>
          <img src={banner1} alt="banner 1" />
        </div>
        <div className={styles.item}>
          <img src={banner2} alt="banner 2" />
        </div>
        <div className={styles.item}>
          <img src={banner3} alt="banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
