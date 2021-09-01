import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import InputCheckbox from 'components/UI/InputCheckbox';
import React from 'react';
import { useState } from 'react';
import { getCartCount } from 'utils/cart';
import { getItemsFromLocalStorage } from 'utils/helpers';
import styles from './receipt.module.scss';

const Receipt = ({ count = 4, totalPrice = 3179000, discount, totalWeight }) => {
  const [check, setCheck] = useState(false);

  const cartLength = getCartCount();
  const cart = getItemsFromLocalStorage('cart');

  const handleChange = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p className={styles.infoText}>
          В корзине находятся товары нескольких продавцов. Они будут доставлены продавцами разными отправлениями. Расчет
          каждого заказа производится отдельно.
        </p>
        <div className={styles.divider} />
        <div className={styles.price}>
          <div>Товары {cartLength} шт.</div>
          <div>{cart?.totalPrice} ₸</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.total}>
          <div>Итоговая цена </div>
          <div>{cart?.totalPrice} ₸</div>
        </div>
      </div>
      <div className={styles.check}>
        <Checkbox onChange={handleChange} value={check} checked={check} />
        <p>
          Нажимая на кнопку «Открыть сделку», Вы соглашаетесь с условиями <span>Правил пользования</span> бартерной
          платформы и <span>правилами возврата</span>
        </p>
      </div>
      <Button className={styles.btn}>Открыть сделку</Button>
    </div>
  );
};

export default Receipt;
