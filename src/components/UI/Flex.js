import React from 'react';
import './../../index.css';

const Flex = ({ children, align = 'flex-start', justify = 'flex-start', className = '', wrap = 'nowrap' }) => {
  return (
    <div className={`flex ${className}`} style={{ alignItems: align, justifyContent: justify, flexWrap: wrap }}>
      {children}
    </div>
  );
};

export default Flex;
