import React from 'react';
import styles from './_city-switcher.module.scss';
import Flex from '../../../UI/Flex';
import { ReactComponent as GeoIcon } from './../../../../static/icons/geo.svg';
import { ReactComponent as ArrowDown } from './../../../../static/icons/arrow-down.svg';

import { Select } from 'antd';

const { Option } = Select;

const mock = [
  {
    id: 1,
    city: 'Алматы',
  },
  {
    id: 2,
    city: 'Астана',
  },
  {
    id: 3,
    city: 'Семей',
  },
];

const CitySwitcher = () => {
  return (
    <div className={styles.wrapper}>
      <Flex align="center">
        <div className={styles.icon}>
          <GeoIcon />
        </div>
        <Select
          defaultValue="Алматы"
          bordered={false}
          className={styles.select}
          suffixIcon={<ArrowDown />}
        >
          {mock.map(({ city, id }) => (
            <Option key={id} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      </Flex>
    </div>
  );
};

export default CitySwitcher;
