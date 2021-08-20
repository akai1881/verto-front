import React, { useEffect, useState } from 'react';
import styles from './_quantity-counter.module.scss';
import { ReactComponent as IncreaseIcon } from './../../static/icons/increase.svg';
import { ReactComponent as DecreaseIcon } from './../../static/icons/decrease.svg';
import { isEmptyString } from 'utils/helpers';
import { INCREASE_KEY } from 'utils/consts';
import { DECREASE_KEY } from 'utils/consts';

const QuantityCounter = ({
  unit = 5,
  onChange,
  controls = true,
  decreaseComponent: DecreaseButton,
  increaseComponent: IncreaseButton,
  count = 1,
  gap = 16,
}) => {
  const [value, setValue] = useState(count);
  const [limit, setLimit] = useState(unit);

  useEffect(() => {
    if (!isEmptyString(value) && onChange !== undefined) {
      onChange(value);
    }
  }, [value]);

  const handleIncrease = () => {
    if (isEmptyString(value)) {
      setValue(1);
      return;
    }
    if (value < limit) {
      setValue((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (isEmptyString(value)) {
      setValue(1);
      return;
    }
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    let val = e.target.value;

    if (isEmptyString(val)) {
      val = '';
      setValue('');
      return;
    } else if (val == 0) {
      val = 1;
    }

    if (isNaN(+val)) {
      return;
    }

    if (+val > limit) {
      // setValue(limit);
      return;
    }

    setValue(+val);
  };

  const handleBlur = (e) => {
    if (isEmptyString(e.target.value)) {
      setValue(1);
    }
  };

  const handleKeyPress = (e) => {
    let count = value;
    if (e.key === INCREASE_KEY) {
      if (isEmptyString(count)) {
        count = 1;
        setValue(count);
        return;
      }
      if (count < limit) {
        count += 1;
        setValue(count);
      }
    } else if (e.key === DECREASE_KEY) {
      if (count === 1 || isEmptyString(count)) {
        count = 1;
        setValue(count);
        return;
      }

      count -= 1;
      setValue(count);
    }
  };

  return (
    <div className={styles.wrapper}>
      {controls && (
        <div onClick={handleDecrease}>{DecreaseButton}</div>
        // <DecreaseButton onClick={handleDecrease} />
        // <button className={styles.btn} onClick={handleDecrease}>
        //   <span>
        //     <DecreaseIcon />
        //   </span>
        // </button>
      )}
      <div className={styles.inputWrapper} style={{ margin: `0 ${gap}px` }}>
        <input type="text" value={value} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyPress} />
      </div>
      {controls && (
        <div onClick={handleIncrease}>{IncreaseButton}</div>
        // <IncreaseButton onClick={handleIncrease} />
        // <button className={styles.btn} onClick={handleIncrease}>
        //   <span>
        //     <IncreaseIcon />
        //   </span>
        // </button>
      )}
    </div>
  );
};

export default QuantityCounter;
