import Flex from 'components/UI/Flex';
import WithLabel from 'components/WithLabel/WithLabel';
import React from 'react';
import styles from './_my-barter-credit.module.scss';
import { Rate } from 'antd';
import { ReactComponent as StarRateIcon } from './../../static/icons/Vector.svg';
import { Doughnut } from 'react-chartjs-2';
import Button from 'components/UI/Button';

const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [10, 100],
      backgroundColor: ['#8193EC', '#D4DAEC'],
      borderColor: ['#8193EC', '#D4DAEC'],
      borderWidth: 1,
      cutout: 33,
    },
  ],
};

const MyBarterCredit = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Мой бартерный кредит</h2>
      <div className={styles.flex}>
        <div className={styles.column}>
          <WithLabel label="Сумма кредита">
            <div className={styles.credit}>У вас пока нет кредита</div>
            <p className={styles.creditUpgrade}>Вы можете повысить его. Нажмите на кнопку «Повысить уровень»</p>
          </WithLabel>
        </div>
        <div className={styles.column}>
          <WithLabel label="% уровня лимита" type="center" alignItemsCenter={true}>
            <div style={{ width: 120, height: 120 }}>
              <Doughnut data={data} />
            </div>
            <div className={styles.creditPercent}>10%</div>
          </WithLabel>
        </div>
        <div className={styles.column}>
          <WithLabel label="Ваш рейтинг" alignItemsCenter={true} type="center">
            <div>
              <h2 className={styles.magazineTitle}>Jem Jem</h2>
              <Rate allowHalf defaultValue={2.5} style={{ color: '#FFC20E', fontSize: '26px' }} />
            </div>
          </WithLabel>
        </div>
      </div>
      <Button className={styles.btn}>Повысить уровень</Button>
    </div>
  );
};

export default MyBarterCredit;
