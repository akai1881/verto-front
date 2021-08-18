import InputCheckbox from 'components/UI/InputCheckbox';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as Check } from './../../../static/icons/Сгруппировать 498.svg';

import styles from './_shared.module.scss';

const CheckBoxItem = ({ item, onChange, value, checked, filterName }) => {
  // const [value, setValue] = useState(false);

  const handleChecked = (item) => {
    onChange(item);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <div>{item.value}</div>
      <div className={styles.checkboxRight}>
        <div className={styles.checkboxCount}>{item.feature}</div>
        <label className={styles.checkbox}>
          <span className={styles.checkbox_input}>
            <input
              type="checkbox"
              name="checkbox"
              data-filter={filterName}
              value={value}
              checked={checked}
              onChange={(e) => handleChecked({ checked: e.target.checked, title: item.value })}
            />
            <span className={styles.checkbox_control}>
              <Check />
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default CheckBoxItem;
