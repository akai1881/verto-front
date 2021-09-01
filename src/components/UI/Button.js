import clsx from 'clsx';
import React from 'react';
import styles from './_button.module.scss';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={clsx({ [styles.btn]: true, [className]: className })}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
