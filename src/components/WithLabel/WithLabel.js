import clsx from 'clsx';
import React from 'react';
import styles from './_with-label.module.scss';

const WithLabel = ({ label, children, gap = 11, type = 'default', alignItemsCenter = false }) => {
  return (
    <div className={styles.wrapper}>
      <span
        className={clsx({
          [styles.label]: true,
          [styles.default]: type === 'default',
          [styles.center]: type === 'center',
          [styles.right]: type === 'right',
        })}
        style={{ marginBottom: `${gap}px` }}
      >
        {label}
      </span>
      <div className={clsx({ [styles.alignCenter]: alignItemsCenter })}>{children}</div>
    </div>
  );
};

export default WithLabel;
