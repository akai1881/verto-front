import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { useState } from 'react';

const CustomScrollbar = ({ children }) => {
  const [activeScroll, setActiveScroll] = useState(false);

  return (
    <Scrollbars
      autoHeight
      onScroll={() => setActiveScroll(true)}
      onScrollStop={() => setActiveScroll(false)}
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          className={`thumb-vertical ${activeScroll ? 'active' : ''}`}
        />
      )}
      renderView={(props) => <div {...props} className="view" />}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
