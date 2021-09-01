import React from 'react';
import './../../index.css';

const Flex = ({
  children,
  align = 'flex-start',
  justify = 'flex-start',
  className = '',
}) => {
  return (
    <div
      className={`flex ${className}`}
      style={{ alignItems: align, justifyContent: justify }}
    >
      {children}
    </div>
  );
};

export default Flex;
