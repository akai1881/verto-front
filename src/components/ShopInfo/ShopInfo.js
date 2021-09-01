import React from 'react';
import Flex from 'components/UI/Flex';

import { ReactComponent as BestSellerIcon } from './../../static/icons/32_Best Seller.svg';
import { ReactComponent as MoneyBackIcon } from './../../static/icons/32_Money back.svg';
import { ReactComponent as EnterShopIcon } from './../../static/icons/32_Entrance shop blue.svg';
import { ReactComponent as MessageIcon } from './../../static/icons/32_Message.svg';
import { ReactComponent as HeartBlueIcon } from './../../static/icons/32_Heart blue.svg';
import { ReactComponent as OtherGoodsIcon } from './../../static/icons/32_other goods blue.svg';

import logo from './../../static/images/_1.png';

import styles from './_shop_info.module.scss';

const ShopInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__garant}>
        <div className={styles.info__garant__header}>
          <h2 className={styles.info__garant__headerTitle}>Покупайте с уверенностью</h2>
        </div>
        <div className={styles.info__garant__body}>
          <div className={styles.info__flex}>
            <span>
              <BestSellerIcon />
            </span>
            <div className={styles.info__garant__left}>
              <h3 className={styles.info__garant__bodyTitle}>Лучший продавец</h3>
              <p className={styles.info__garant__bodyText}>Надежный и ответственный продавец, качественный сервис</p>
            </div>
          </div>
          <div className={styles.info__flex}>
            <span>
              <MoneyBackIcon />
            </span>
            <div className={styles.info__garant__left}>
              <h3 className={styles.info__garant__bodyTitle}>Гарантия возвата денег</h3>
              <p className={styles.info__garant__bodyText}>Вы получите ваш заказ, либо мы возместим его стоимость</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.shop}>
        <div className={styles.shop__header}>
          <h3 className={styles.shop__headerTitle}>Сведения о продавце</h3>
        </div>
        <div className={styles.shop__info}>
          <Flex align="center">
            <div className={styles.shop__logo}>
              <img src={logo} alt="logo of shop" />
            </div>
            <div className={styles.shop__text}>
              <h3 className={styles.shop__name}>JemJem</h3>
              <p className={styles.shop__reviews}>99% положительных отзывов</p>
            </div>
          </Flex>
        </div>
        <div className={styles.shop__actions}>
          <div className={styles.shop__action}>
            <span>
              <EnterShopIcon />
            </span>
            <div className={styles.shop__actionTitle}>Посетить магазин</div>
          </div>
          <div className={styles.shop__action}>
            <span>
              <MessageIcon />
            </span>
            <div className={styles.shop__actionTitle}>Написать продавцу</div>
          </div>
          <div className={styles.shop__action}>
            <span>
              <HeartBlueIcon />
            </span>
            <div className={styles.shop__actionTitle}>Сохранить этого продавца</div>
          </div>

          <div className={styles.shop__action}>
            <span>
              <OtherGoodsIcon />
            </span>
            <div className={styles.shop__actionTitle}>Показать товары</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
