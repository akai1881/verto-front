import React from 'react';
import styles from './_scroll.module.scss';
import { Scrollbars } from 'rc-scrollbars';

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars
      autoHeight
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => <div {...props} className="view" />}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
