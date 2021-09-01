import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearModalState,
  setCategory,
  setCategoryClick,
  setModalVisible,
  setSubCategory,
  setSubCategoryClick,
} from 'store/slices/modalSlice';

import Modal from 'antd/lib/modal/Modal';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';
import { Skeleton } from 'antd';
import clsx from 'clsx';

import styles from './_modal.module.scss';

const CategoryModal = () => {
  const { open, isCategoryOpen, isSubCategoryOpen, categoryIndex, subCategoryIndex } = useSelector(
    ({ modal }) => modal
  );

  const { data: categories, loading } = useSelector(({ products }) => products.categories);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleOpenModal = () => {
    dispatch(setModalVisible());
  };

  // TODO refactor modal logic

  const handleCloseModal = () => {
    dispatch(setModalVisible());
    /*
      set category
      list to default
    */
    dispatch(clearModalState());
  };

  const handleCategoryClick = (category) => {
    return () => {
      if (categoryIndex !== category.index) {
        dispatch(setSubCategoryClick(null));
        dispatch(setSubCategory(false));
        dispatch(setCategoryClick(true));
        dispatch(setCategory(category));
      } else {
        dispatch(setCategory(category));
        dispatch(setCategoryClick(true));
      }
    };
  };

  const handleSubCategoryClick = (subCategory) => {
    return () => {
      dispatch(setSubCategoryClick(true));
      dispatch(setSubCategory(subCategory));
    };
  };

  const handleCategoryRedirect = (slug) => {
    return () => {
      dispatch(setModalVisible(false));
      history.push(`/goods/${categoryIndex.slug}/${subCategoryIndex.slug}/${slug}`);
    };
  };

  return (
    <Modal
      visible={open}
      closable={false}
      wrapClassName={`modal ${loading ? 'pending' : ''}`}
      style={{ top: 144, left: -10, borderRadius: 30, padding: 0 }}
      footer={null}
      width={1190}
      onCancel={handleCloseModal}
      onOk={handleOpenModal}
    >
      {!loading ? (
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.columnInner}>
              {categories.map((first, index) => (
                <div
                  key={first.slug}
                  onClick={handleCategoryClick({ slug: first.slug, index })}
                  className={clsx({
                    [styles.default]: true,
                    [styles.active_cat]: categoryIndex?.index === index,
                  })}
                >
                  {first.title}
                </div>
              ))}
            </div>
          </div>
          {isCategoryOpen ? (
            <>
              <div className={styles.divider} />
              <div className={styles.column}>
                <Fade direction="left" className={styles.animationContainer} duration={380}>
                  <div className={styles.columnInner}>
                    <Fade direction="down" cascade duration={280}>
                      <>
                        {categories[categoryIndex.index].children.map((item, index) => (
                          <div
                            key={item.slug}
                            onClick={handleSubCategoryClick({
                              slug: item.slug,
                              index,
                            })}
                            className={clsx({
                              [styles.default]: true,
                              [styles.subcat]: true,
                              [styles.active_sub]: subCategoryIndex?.index === index,
                            })}
                          >
                            {item.title}
                          </div>
                        ))}
                      </>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </>
          ) : null}
          {isSubCategoryOpen ? (
            <>
              <div className={styles.divider} />
              <div className={styles.column}>
                <Fade direction="left" className={styles.animationContainer} duration={300}>
                  <div className={styles.columnInner}>
                    <Fade direction="down" cascade duration={280}>
                      <>
                        {categories[categoryIndex.index].children[subCategoryIndex.index].children.map((item) => (
                          <div
                            key={item.slug}
                            onClick={handleCategoryRedirect(item.slug)}
                            className={`${styles.default} ${styles.children_cat}`}
                          >
                            {item.title}
                          </div>
                        ))}
                      </>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className={styles.spinner}>
          <Skeleton active paragraph={{ rows: 5, width: [...Array(5).fill('100%')] }} />
        </div>
      )}
    </Modal>
  );
};

export default CategoryModal;
