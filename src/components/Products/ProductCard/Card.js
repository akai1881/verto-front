import React from 'react';
import styles from './_card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <img src={item.img} alt={item.title} />
        <div></div>
      </div>
      <div className={styles.body}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Card;
