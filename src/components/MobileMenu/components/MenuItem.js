import React, { useState } from 'react';

import styles from './_menuitem.module.scss';

const MenuItem = ({
  children,
  setActiveMenu,
  item,
  goToMenu,
  right,
  className,
  isSubMenu = false,
  index,
  activeRight,
}) => {
  const [isHovering, setHovering] = useState(false);

  const handleClick = () => {
    if (!isSubMenu) {
      setActiveMenu(goToMenu);
    } else {
      setActiveMenu(goToMenu, { index, title: item.title, slug: item.slug });
    }
  };

  return (
    <div
      onClick={() => goToMenu && handleClick()}
      className={`${styles.wrapper} ${className && className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className={styles.innerItem}>{children}</div>
      <div>{isHovering ? right : activeRight}</div>
    </div>
  );
};

export default MenuItem;
