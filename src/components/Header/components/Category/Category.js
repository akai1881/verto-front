import React from 'react';
import styles from './_category.module.scss';
import { ReactComponent as ArrowDown } from './../../../../static/icons/arrow-down.svg';

const Category = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Категории</div>
      <ArrowDown className={styles.arrow_down} />
    </div>
  );
};

export default Category;
