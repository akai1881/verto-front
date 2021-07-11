import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import styles from './_modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearModalState,
  setCategory,
  setCategoryClick,
  setModalVisible,
  setSubCategory,
  setSubCategoryClick,
} from 'store/slices/modalSlice';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';
import { Skeleton } from 'antd';
import clsx from 'clsx';

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

  const handleCloseModal = () => {
    dispatch(setModalVisible());
    /*
      set category
      list to default
    */
    dispatch(clearModalState());
  };

  const handleCategoryClick = (index) => {
    return () => {
      if (categoryIndex !== index) {
        dispatch(setSubCategoryClick(null));
        dispatch(setSubCategory(false));
        dispatch(setCategoryClick(true));
        dispatch(setCategory(index));
      } else {
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
                  key={first.id}
                  onClick={handleCategoryClick(index)}
                  className={clsx({
                    [styles.default]: true,
                    [styles.active_cat]: categoryIndex === index,
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
                <Fade
                  direction="left"
                  className={styles.animationContainer}
                  duration={380}
                >
                  <div className={styles.columnInner}>
                    <Fade direction="down" cascade duration={280}>
                      <>
                        {categories[categoryIndex].children.map(
                          (item, index) => (
                            <div
                              key={item.id}
                              onClick={handleSubCategoryClick(index)}
                              className={clsx({
                                [styles.default]: true,
                                [styles.subcat]: true,
                                [styles.active_sub]: subCategoryIndex === index,
                              })}
                            >
                              {item.title}
                            </div>
                          )
                        )}
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
                <Fade
                  direction="left"
                  className={styles.animationContainer}
                  duration={300}
                >
                  <div className={styles.columnInner}>
                    <Fade direction="down" cascade duration={280}>
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
                    </Fade>
                  </div>
                </Fade>
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className={styles.spinner}>
          <Skeleton
            active
            paragraph={{ rows: 5, width: [...Array(5).fill('100%')] }}
          />
        </div>
      )}
    </Modal>
  );
};

export default CategoryModal;
