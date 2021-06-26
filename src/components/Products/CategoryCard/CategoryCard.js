import Title from 'antd/lib/typography/Title';
import React from 'react';
import styles from './_category-card.module.scss';

const CategoryCard = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_image}>
        <img src={item.img} alt={item.title} />
      </div>
      <Title level={4} className={styles.title}>
        {item.title}
      </Title>
    </div>
  );
};

export default CategoryCard;
