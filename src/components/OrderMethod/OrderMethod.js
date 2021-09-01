import BarterOption from 'components/BarterOption/BarterOption';
import React from 'react';
import styles from './_order-method.module.scss';
import walletImg from './../../static/images/Bottom/70_Wallet 1.svg';
import activeWalletImg from './../../static/images/Bottom/active-wallet.svg';
import creditImg from './../../static/images/Bottom/70_Credit Limit 1.svg';
import activeCreditImg from './../../static/images/Bottom/Bottom/active-credit.svg';

const OrderMethod = ({ setActiveTab, activeTab }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Cпособ платежа</h2>
      <p className={styles.subtitle}>Выберите один из двух способов платежа</p>
      <div className={styles.orderOptions}>
        <BarterOption
          img={walletImg}
          imgActive={activeWalletImg}
          title={'Мой бартерный кошелёк'}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          active={activeTab === 1}
          tabIndex={1}
        />
        <BarterOption
          img={creditImg}
          imgActive={activeCreditImg}
          title={'Мой бартерный кредит'}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          active={activeTab === 2}
          tabIndex={2}
        />
      </div>
    </div>
  );
};
export default OrderMethod;
