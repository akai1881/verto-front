import React from 'react';
import './../../index.css';

const Flex = ({ children, align = 'flex-start', justify = 'flex-start' }) => {
  return (
    <div
      className="flex"
      style={{ alignItems: align, justifyContent: justify }}
    >
      {children}
    </div>
  );
};

export default Flex;
