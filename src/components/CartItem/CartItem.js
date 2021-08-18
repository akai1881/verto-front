import React from 'react';
import styles from './_cartItem.module.scss'
import {ReactComponent as MessageIcon} from "./../../static/images/messageIcon.svg";

const CartItem = ({product, count}) => {

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartImg}>
        <img src={product.image} alt=""/>
      </div>
      <div className={styles.cartBody}>
        <h2 className={styles.cartTitle}>
          {product.title}
        </h2>
        <div className={styles.cartFeatures}>
          <div className={styles.featuresList}>
            {
              product.features.map(feature => (
                <div className={styles.cartFeatureItem}>
                  <span className={styles.cartFeature}>{feature.feature_title}: </span>
                  <span className={styles.cartFeature}>
                    {feature.value}
                  </span>
                </div>
              ))
            }
          </div>
          <div className={styles.cartVendor}>
            <span>
              Написать продавцу
            </span>
            <MessageIcon/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;