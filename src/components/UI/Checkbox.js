import React from 'react';
import styles from './_checkbox.module.scss';
import { ReactComponent as Check } from './../../static/icons/Сгруппировать 498.svg';

const Checkbox = ({ title, count, onChange, value }) => {
  return (
    <label className={styles.checkbox}>
      <span className={styles.checkbox_input}>
        <input
          type="checkbox"
          name="checkbox"
          value={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.checkbox_control}>
          <Check />
        </span>
      </span>
      {count && title && (
        <span className={styles.radio_label}>
          {title} <span>({count})</span>
        </span>
      )}
    </label>
  );
};

export default Checkbox;
