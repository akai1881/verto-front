import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './_category.module.scss';
import { ReactComponent as ArrowDown } from './../../../../static/icons/arrow-down.svg';
import { ReactComponent as CloseIcon } from './../../../../static/icons/16_cancel white.svg';
import { clearModalState, setModalVisible } from 'store/slices/modalSlice';
import clsx from 'clsx';

const Category = () => {
  const open = useSelector(({ modal }) => modal.open);
  const openSearch = useSelector(({ products }) => products.search.open);

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
      className={clsx({
        [styles.wrapper]: true,
        [styles.active]: open,
        [styles.activeSearch]: openSearch,
      })}
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
