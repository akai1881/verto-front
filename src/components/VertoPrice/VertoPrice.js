import clsx from 'clsx';
import React from 'react';
import { ACTIVE_COLOR_HEX } from 'utils/consts';
import { DISACTIVE_COLOR_HEX } from 'utils/consts';
import style from './_vero-price.module.scss';

const VertoPrice = ({
  price,
  currency = '₸',
  size = '24px',
  width = 'initial',
  align = 'left',
  className,
  active = true,
}) => {
  console.log(price);

  return (
    <h2
      className={clsx({ [style.price]: true, [className]: className })}
      style={{ fontSize: size, width, textAlign: align, color: active ? ACTIVE_COLOR_HEX : DISACTIVE_COLOR_HEX }}
    >
      {price}
      {currency}
    </h2>
  );
};

export default VertoPrice;
