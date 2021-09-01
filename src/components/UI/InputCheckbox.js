import React from 'react';
import { ReactComponent as Check } from './../../static/icons/Сгруппировать 498.svg';
import styles from './_checkbox.module.scss';

const InputCheckbox = ({ onChange, value, checked = false, title }) => {
  return (
    <span className={styles.checkbox_input}>
      <input
        type="checkbox"
        name="checkbox"
        value={value}
        checked={checked}
        onChange={(e) => onChange({ checked: e.target.checked, title })}
      />
      <span className={styles.checkbox_control}>
        <Check />
      </span>
    </span>
  );
};

export default InputCheckbox;
