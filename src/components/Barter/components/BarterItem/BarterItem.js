import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import QuantityCounter from 'components/QuantityCounter/QuantityCounter';
import Button from 'components/UI/Button';
import MySelect from 'components/UI/MySelect';
import WithLabel from 'components/WithLabel/WithLabel';
import VertoPrice from 'components/VertoPrice/VertoPrice';
import { ReactComponent as MultiplyIconActive } from 'static/icons/Close_square_active.svg';
import { ReactComponent as MultiplyIconDiactive } from 'static/icons/Close_square_diactive.svg';
import { ReactComponent as IncreaseIcon } from 'static/icons/increase.svg';
import { ReactComponent as DecreaseIcon } from 'static/icons/decrease.svg';
import { ReactComponent as EqualIcon } from 'static/icons/equalIcon.svg';
import { ReactComponent as EquanIconDiactive } from 'static/icons/equal_diactive.svg';
import styles from './_barter-item.module.scss';
import { calcSubPrice } from 'utils/helpers';

const BarterItem = ({ product, list, setBarterItem, index }) => {
  const [totalPrice, setTotalPrice] = useState(calcSubPrice(product.price, product.quantity));
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setTotalPrice(calcSubPrice(price, quantity));
  }, [product, price, quantity]);

  const handlePrice = useCallback(
    (value) => {
      setPrice(value);
      setTotalPrice(calcSubPrice(value, quantity));
      console.log(calcSubPrice(value, quantity));
    },
    [product]
  );

  const handleQuantity = useCallback(
    (value) => {
      setQuantity(value);
      setTotalPrice(calcSubPrice(value, price));
    },
    [product]
  );

  const handleSelectChange = (id) => {
    setBarterItem(id, index);
  };

  return (
    <div className={styles.wrapper}>
      <WithLabel label="Выберите товар из списка размещенных">
        <MySelect
          bordered={true}
          dropdownClassName="selector"
          maxTagTextLengt={40}
          data={list}
          onSelect={handleSelectChange}
        />
      </WithLabel>
      {product.active ? <MultiplyIconActive /> : <MultiplyIconDiactive />}
      <WithLabel label="Цена за единицу" type="center">
        <QuantityCounter
          controls={true}
          count={product.price}
          noLimit={true}
          onChange={handlePrice}
          unit={product.price}
          increaseComponent={
            <Button className={styles.btn} type="rounded">
              <IncreaseIcon />
            </Button>
          }
          decreaseComponent={
            <Button className={styles.btn} type="rounded">
              <DecreaseIcon />
            </Button>
          }
        />
      </WithLabel>
      {product.active ? <MultiplyIconActive /> : <MultiplyIconDiactive />}
      <WithLabel label="Кол-во (шт.)" type="center">
        <QuantityCounter
          controls={true}
          count={product.quantity}
          onChange={handleQuantity}
          unit={product.quantity}
          noLimit={true}
          increaseComponent={
            <Button className={styles.btn} type="rounded">
              <IncreaseIcon />
            </Button>
          }
          decreaseComponent={
            <Button className={styles.btn} type="rounded">
              <DecreaseIcon />
            </Button>
          }
        />
      </WithLabel>
      {product.active ? <EqualIcon /> : <EquanIconDiactive />}
      <WithLabel label="Общая цена">
        <VertoPrice price={totalPrice} width="130px" active={product.active} />
      </WithLabel>
    </div>
  );
};

export default BarterItem;
