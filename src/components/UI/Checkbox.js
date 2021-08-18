import React from 'react';
import styles from './_checkbox.module.scss';
import { ReactComponent as Check } from './../../static/icons/Сгруппировать 498.svg';
import InputCheckbox from './InputCheckbox';

const Checkbox = ({ title, count, onChange, checked }) => {
  return (
    <label className={styles.checkbox}>
      <InputCheckbox title={title} onChange={onChange} checked={checked} />
      {count && title && (
        <span className={styles.radio_label}>
          {title} <span>({count})</span>
        </span>
      )}
    </label>
  );
};

export default Checkbox;
