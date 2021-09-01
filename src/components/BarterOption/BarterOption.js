import clsx from 'clsx';
import React from 'react';
import styles from './_barter-option.module.scss';

const BarterOption = ({ title, img, onClick, active = false, imgActive, tabIndex, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={clsx({ [styles.wrapper]: true, [styles.active]: active })} onClick={handleClick}>
      <div className={styles.image}>{active ? <img src={imgActive} /> : <img src={img} />}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default BarterOption;
