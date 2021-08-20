import clsx from 'clsx';
import React from 'react';

const CounterButton = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={clsx({ [className]: className })}>
      <span>{children}</span>
    </button>
  );
};

export default CounterButton;
