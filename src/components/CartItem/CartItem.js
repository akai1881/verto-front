import React from 'react';
import styles from './_cartItem.module.scss';
import { ReactComponent as MessageIcon } from './../../static/images/messageIcon.svg';
import { ReactComponent as DecreaseIcon } from 'static/icons/decrease.svg';
import { ReactComponent as IncreaseIcon } from 'static/icons/increase.svg';
import { ReactComponent as HeartIcon } from 'static/icons/heartIcon.svg';
import { ReactComponent as TrashIcon } from 'static/icons/trashIcon.svg';
import QuantityCounter from '../QuantityCounter/QuantityCounter';
import Button from 'components/UI/Button';
import { useCallback } from 'react';
import { changeProductCount } from 'utils/cart';

const CartItem = ({ product, count, onDelete }) => {
  const handleChangeCount = useCallback(
    (count) => {
      changeProductCount(count, product.id);
    },
    [product]
  );

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageWrapper}>
        <div className={styles.cartImg}>
          <img src={product.images[0].image} alt="" />
        </div>
      </div>
      <div className={styles.cartBody}>
        <h2 className={styles.cartTitle}>{product.title}</h2>
        <div className={styles.cartFeatures}>
          <div className={styles.featuresList}>
            {product?.features?.map((feature) => (
              <div className={styles.cartFeatureItem}>
                <span className={styles.cartFeature}>{feature.feature_title}: </span>
                <span className={styles.cartFeature}>{feature.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.cartVendor}>
            <span>Написать продавцу</span>
            <span className={styles.messageIcon}>
              <MessageIcon />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.cartCounter}>
        <QuantityCounter
          unit={product.quantity}
          onChange={handleChangeCount}
          count={count}
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
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.actions}>
          <Button type="action">
            <HeartIcon />
          </Button>
          <Button type="action" onClick={() => onDelete(product)}>
            <TrashIcon />
          </Button>
        </div>
        <div className={styles.price}>{product.price} ₸</div>
      </div>
    </div>
  );
};

export default CartItem;
