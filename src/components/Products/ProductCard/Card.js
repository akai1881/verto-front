import React from 'react';
import styles from './_card.module.scss';
import { Image } from 'antd';

import eyeIconActive from './../../../static/icons/24_eye red_active.svg';

import eyeIconDefault from './../../../static/icons/24_eye yellow_diactive.svg';

import favIconActive from './../../../static/icons/heart.svg';

const Card = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <Image src={item.img} width={'100%'} />
        <div className={styles.actions}>
          <button
            className={`${styles.seen} ${item.hasSeen ? 'has_seen' : ''}`}
          ></button>
          <button></button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{item.title}</div>
      </div>
      <div className={styles.bottom}>
        <>
          <div
            className={`${item.status ? styles.inStock : ''} ${
              styles.default
            } ${styles.align}`}
          >
            {item.status ? 'В наличии' : 'Нет в наличии'}
          </div>
          <div className={`${styles.default} ${styles.textAlign}`}>
            Мин. кол-во <br />
            для заказа {item.min_purchase} {item.unity}.
          </div>
        </>
      </div>
    </div>
  );
};

export default Card;
