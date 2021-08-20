import React from 'react';
import { useReducer } from 'react';
import { reducer } from 'utils/reducers/counterReducer';

const init = {
  quantity: 1,
};

const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, init);

  return { state, dispatch };
};

export default useCounter;
