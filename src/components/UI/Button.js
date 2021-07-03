import React from 'react';
import styles from './_button.module.scss';

const Button = ({ children, onClick, style }) => {
  return (
    <button className={styles.btn} style={style} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
