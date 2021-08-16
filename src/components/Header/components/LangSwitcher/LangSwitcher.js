import React from 'react';
import styles from './_lang-switcher.module.scss';
import {Select} from 'antd';
import {ReactComponent as ArrowDown} from './../../../../static/icons/arrow-down.svg';

const {Option} = Select;

const mock = [
  {
    id: 1,
    lang: 'RU',
  },
  {
    id: 2,
    lang: 'EN',
  },
  {
    id: 3,
    lang: 'KZ',
  },
];

const LangSwitcher = () => {
  return (
    <Select
      defaultValue="RU"
      bordered={false}
      className={styles.lang}
      suffixIcon={<ArrowDown/>}
    >
      {mock.map(({id, lang}) => (
        <Option key={id} value={lang}>
          {lang}
        </Option>
      ))}
    </Select>
  );
};

export default LangSwitcher;
