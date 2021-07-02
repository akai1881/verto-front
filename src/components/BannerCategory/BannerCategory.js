import { Image } from 'antd';
import React from 'react';
import styles from './_banner.module.scss';
import banner from './../../static/images/Banners.png';
import Title from 'antd/lib/typography/Title';

const BannerCategory = ({ categoryName }) => {
  return (
    <div className={styles.banner}>
      <Image src={banner} preview={false} />
      <Title className={`title ${styles.banner_title}`} level={2}>
        {/* {categoryName} */}
        Сотовые телефоны и смартфоны
      </Title>
    </div>
  );
};

export default BannerCategory;
