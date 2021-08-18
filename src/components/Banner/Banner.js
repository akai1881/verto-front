import React, {useMemo} from 'react';

import { Image } from 'antd';
import Title from 'antd/lib/typography/Title';

import styles from './_banner.module.scss';

// import banner from './../../static/images/Banners.png';
import { useSelector } from 'react-redux';

const Banner = ({ title, banner }) => {
  // const categories = useSelector(({ products }) => products.categories.data);

  // const getName = () => {
  //   const first = categories.find((item) => item.slug == params.categoryIndex);
  //   const subCategory = first?.children?.find((item) => item.slug === params?.subCategoryIndex);
  //   const targetCategory = subCategory?.children?.find((item) => item.slug === params?.categoryName);
  //
  //   return targetCategory?.title;
  // };

  // const name = useMemo(() => getName(), [params])


  return (
    <div className={styles.banner}>
      <Image src={banner} preview={false} />
      <Title className={`title ${styles.banner_title}`} level={2}>
        {title}
      </Title>
    </div>
  );
};

export default Banner;
