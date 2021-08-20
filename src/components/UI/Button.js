import clsx from 'clsx';
import React from 'react';
import styles from './_button.module.scss';

const Button = ({ children, onClick, className, type = 'primary' }) => {
  return (
    <button
      className={clsx({
        [styles.btn]: type === 'primary',
        [className]: className && type !== 'custom',
        [styles.action]: type === 'action',
      })}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
