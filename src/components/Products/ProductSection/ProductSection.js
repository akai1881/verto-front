import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';
import { Skeleton } from 'antd';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay]);

const ProductSection = ({
  data,
  loading,
  ComponentItem,
  title,
  titleGutter = 20,
  gutter = [24, 24],
  top = 100,
  xs,
  lg,
  xl,
  perView = 3,
  sm,
  autoplay = false,
  loop = false,
  isCard,
  md,
  responsive,
  bottom = 0,
  span = 6,
}) => {
  const isSmall = useMediaQuery({ maxWidth: deviceSize.smallMobile });
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const renderProductsData = () => {
    if (loading) {
      return Array(5)
        .fill(1)
        .map((skeleton, index) => (
          <Col span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl} key={index}>
            <div className="skeleton-wrapper">
              <Skeleton.Input style={{ width: '100%', height: 250 }} active={true} />
            </div>
          </Col>
        ));
    }

    if (data.length) {
      return data.map((item) => (
        <Col span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl} key={item.id}>
          <ComponentItem item={item} responsive={responsive} />
        </Col>
      ));
    } else if (title === 'Недавно просмотренные' && data.length === 0) {
      return 'Еще нет просмотренных товаров';
    } else {
      return null;
    }
  };

  return (
    <div style={{ paddingTop: top, paddingBottom: bottom }}>
      <Title level={3} className="title" style={{ marginBottom: titleGutter }}>
        {title}
      </Title>
      {isMobile ? (
        <div className={`${isCard ? 'swiper-home' : ''}`}>
          <Swiper slidesPerView={perView} spaceBetween={15} autoplay={autoplay} loop={loop} autoHeight>
            {data.length > 0 &&
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <ComponentItem item={item} responsive={responsive} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ) : (
        <Row gutter={!isSmall ? gutter : [9, 9]}>{renderProductsData()}</Row>
      )}
    </div>
  );
};

export default ProductSection;
