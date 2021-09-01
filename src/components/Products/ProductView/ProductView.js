import React, {useState} from 'react';
import SwiperCore, {Navigation, Autoplay, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styles from './_productView.module.scss';

import photo1 from './../../../static/images/photo1.png';
import photo2 from './../../../static/images/iphone-2.png';
import photo3 from './../../../static/images/iphone-3.png';
import photo4 from './../../../static/images/iphone-4.png';

SwiperCore.use([Navigation, Autoplay, Thumbs]);

// const data = [
//   {
//     img: photo1,
//     id: 1,
//   },
//   {
//     img: photo2,
//     id: 2,
//   },
//   {
//     img: photo3,
//     id: 3,
//   },
//   {
//     img: photo4,
//     id: 3,
//   },
// ];

const ProductView = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="swiper-wrap">
        <Swiper navigation spaceBetween={0} loop slidesPerView={1} autoplay thumbs={{swiper: thumbsSwiper}}>
          {images?.map((image) => (
            <SwiperSlide>
              <img className={styles.mainImg} src={image.image} alt=""/>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <img className={styles.mainImg} src={photo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.mainImg} src={photo3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.mainImg} src={photo4} alt="" />
          </SwiperSlide> */}
        </Swiper>
        <div className="thumbs">
          <Swiper
            onSwiper={setThumbsSwiper}
            watchSlidesVisibility
            watchSlidesProgress
            navigation
            spaceBetween={6}
            slidesPerView={4}
          >
            {images?.map((image) => (
              <SwiperSlide>
                <img className={styles.mainImg} src={image.image} alt=""/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductView;
