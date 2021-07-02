import React from 'react';
import styles from './_pircefilter.module.scss';
import Title from 'antd/lib/typography/Title';
import { Slider } from 'antd';

const PriceFilter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />
      <Title level={4} className={styles.price_title}>
        Цена
      </Title>

      <div className={styles.price}>
        от
        <input className={styles.price_input} type="text" placeholder="30000" />
        до
        <input
          className={styles.price_input}
          type="text"
          placeholder="1000000"
        />
        ₸
      </div>

      <div className="slider">
        <Slider
          range
          defaultValue={[30000, 1000000]}
          min={30000}
          max={1000000}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
