import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './_category.module.scss';
import { ReactComponent as ArrowDown } from './../../../../static/icons/arrow-down.svg';
import { ReactComponent as CloseIcon } from './../../../../static/icons/16_cancel white.svg';
import {
  clearModalState,
  setCategory,
  setCategoryClick,
  setModalVisible,
  setSubCategory,
  setSubCategoryClick,
} from 'store/slices/modalSlice';

const Category = () => {
  const open = useSelector(({ modal }) => modal.open);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setModalVisible());

    /* 
      set category 
      list to default
    */
    dispatch(clearModalState());
  };

  return (
    <div
      className={`${styles.wrapper} ${open ? styles.active : ''}`}
      onClick={handleOpenModal}
    >
      <div className={styles.text}>Категории</div>
      {open ? (
        <CloseIcon className={styles.arrow_down} />
      ) : (
        <ArrowDown className={styles.arrow_down} />
      )}
    </div>
  );
};

export default Category;
