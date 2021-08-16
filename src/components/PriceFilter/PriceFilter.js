import React, { useEffect } from 'react';
import Title from 'antd/lib/typography/Title';
import { Slider } from 'antd';

import styles from './_pircefilter.module.scss';
import { useState } from 'react';
import useDebounce from 'hooks/useDebounce';

const PriceFilter = ({ divider = true, className, onChange }) => {
  const [priceLte, setPriceLte] = useState(3000);
  const [priceGte, setPriceGte] = useState(1000000);
  const priceLterDebounce = useDebounce(priceLte, 500);
  const priceGteDebounce = useDebounce(priceGte, 300);

  useEffect(() => {
    onChange([priceLterDebounce, priceGteDebounce]);
  }, [priceLterDebounce, priceGteDebounce]);

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  const handleChangePrice = (price) => {
    setPriceLte(price[0]);
    setPriceGte(price[1]);
  };

  return (
    <div className={styles.wrapper}>
      {divider && <div className={styles.divider} />}
      <Title level={4} className={`${styles.price_title} ${className}`}>
        Цена
      </Title>

      <div className={styles.price}>
        от
        <input
          className={styles.price_input}
          type="number"
          name="from"
          placeholder="30000"
          value={priceLte}
          onChange={(e) => setPriceLte(e.target.value)}
        />
        до
        <input
          className={styles.price_input}
          type="number"
          name="to"
          placeholder="1000000"
          value={priceGte}
          onChange={(e) => setPriceGte(e.target.value)}
        />
        ₸
      </div>

      <div className="slider">
        <Slider
          range
          value={[priceLte, priceGte]}
          min={30000}
          max={1000000}
          onChange={(price) => handleChangePrice(price)}
          onAfterChange={onChange}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
