import React from 'react';
import styles from './_preload-spinner.module.scss'
import logo from './../../static/images/Logo_198.png'


const PreloadSpinner = () => {
  return (
    <div className={styles.preloadWrapper}>
      <img src={logo} alt="" className={styles.preloadImage}/>
      <div className={'loading-spinner'}/>
    </div>
  );
};

export default PreloadSpinner;