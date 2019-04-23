import {
  CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'IDR',
  quoteCurrency: 'USD',
  amount: 100,
  conversion: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.baseCurrency,
        quoteCurrency: state.quoteCurrency,
      };
    default:
      return state;
  }
};

export default reducer;
