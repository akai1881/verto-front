import React from 'react';

import styles from './_shared.module.scss';

const FilterItem = ({ title, onClick }) => {
  return (
    <div className={styles.filterItem} onClick={onClick}>
      {title}
    </div>
  );
};

export default FilterItem;
