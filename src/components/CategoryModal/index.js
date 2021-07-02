import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import styles from './_modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCategory,
  setCategoryClick,
  setModalVisible,
  setSubCategory,
  setSubCategoryClick,
} from 'store/slices/modalSlice';
import Flex from 'components/UI/Flex';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';

const CategoryModal = () => {
  const {
    open,
    isCategoryOpen,
    isSubCategoryOpen,
    categoryIndex,
    subCategoryIndex,
  } = useSelector(({ modal }) => modal);

  const { data: categories, loading } = useSelector(
    ({ products }) => products.categories
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const handleOpenModal = () => {
    dispatch(setModalVisible());
  };

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const handleCloseModal = () => {
    /*
      set category
      list to default
    */
    dispatch(setModalVisible());
    dispatch(setCategoryClick(false));
    dispatch(setCategory(null));
    dispatch(setSubCategoryClick(false));
    dispatch(setSubCategory(null));
  };

  const handleCategoryClick = (index, slug) => {
    return () => {
      if (categoryIndex !== index) {
        dispatch(setSubCategoryClick(null));
        dispatch(setSubCategory(false));
        dispatch(setCategoryClick(true));
        dispatch(setCategory(index));
      } else {
        // history.push(`/category/${slug}`);
        dispatch(setCategory(index));
        dispatch(setCategoryClick(true));
      }
    };
  };

  const handleSubCategoryClick = (index) => {
    return () => {
      dispatch(setSubCategoryClick(true));
      dispatch(setSubCategory(index));
    };
  };

  const handleCategoryRedirect = (title) => {
    return () => {
      dispatch(setModalVisible(false));
      history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${title}`);
    };
  };

  return (
    <Modal
      visible={open}
      closable={false}
      maskStyle={{ backgroudColor: 'red' }}
      wrapClassName="modal"
      style={{ top: 144, left: -10, borderRadius: 30, padding: 0 }}
      footer={null}
      width={1190}
      onCancel={handleCloseModal}
      onOk={handleOpenModal}
    >
      {!loading ? (
        <Flex>
          <div className={styles.column}>
            {categories.map((first, index) => (
              <div
                key={first.id}
                onClick={handleCategoryClick(index, first.slug)}
                className={`${styles.default} ${
                  categoryIndex === index ? styles.active_cat : ''
                }`}
              >
                {first.title}
              </div>
            ))}
          </div>
          <div className={styles.divider} />
          <div className={styles.column}>
            <Fade direction="down" cascade duration={280}>
              {isCategoryOpen ? (
                <>
                  {categories[categoryIndex].children.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={handleSubCategoryClick(index)}
                      className={`${styles.default} ${styles.subcat} ${
                        subCategoryIndex === index ? styles.active_sub : ''
                      }`}
                    >
                      {item.title}
                    </div>
                  ))}
                </>
              ) : null}
            </Fade>
          </div>
          <div className={styles.divider} />
          <div className={styles.column}>
            <Fade direction="down" cascade duration={280}>
              {isSubCategoryOpen ? (
                <>
                  {categories[categoryIndex].children[
                    subCategoryIndex
                  ].children.map((item) => (
                    <div
                      key={item.id}
                      onClick={handleCategoryRedirect(item.title)}
                      className={`${styles.default} ${styles.children_cat}`}
                    >
                      {item.title}
                    </div>
                  ))}
                </>
              ) : null}
            </Fade>
          </div>
        </Flex>
      ) : (
        <div className={styles.spinner}>
          <Spin />
        </div>
      )}
    </Modal>
  );
};

export default CategoryModal;
