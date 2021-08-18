import React from 'react';
import Title from 'antd/lib/typography/Title';

import styles from './_category-card.module.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryCard = ({ item }) => {
  const categories = useSelector(({ products }) => products.categories.data);
  const history = useHistory();

  const handleRedirect = () => {
    let categorySlug;
    let subCategorySlug;
    let catSlug;

    categories.forEach((category) => {
      category.children.forEach((subCategory) => {
        subCategory.children.forEach((cat) => {
          if (cat.slug === item.slug) {
            categorySlug = category.slug;
            subCategorySlug = subCategory.slug;
            catSlug = cat.slug;
          }
        });
      });
    });

    history.push(`/goods/${categorySlug}/${subCategorySlug}/${catSlug}`);
  };

  return (
    <div className={styles.wrapper} onClick={handleRedirect}>
      <div className={styles.card_image}>
        <img src={item.img ?? item.image} alt={item.title} />
      </div>
      <Title level={4} className={styles.title}>
        {item.title}
      </Title>
    </div>
  );
};

export default CategoryCard;
