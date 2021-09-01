import { CHANGE_QUANTITY } from 'utils/consts';
import { DECREASE_QUANTITY } from 'utils/consts';
import { INCREASE_QUANTITY } from 'utils/consts';

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };

    default:
      return state;
  }
};
