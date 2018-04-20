import * as actionTypes from '../actions/actionTypes';

const paymentReducer = (state = {name: ''}, action) => {
  switch (action.type) {

    case actionTypes.SELECT_PAYMENT_METHOD: {
      return Object.assign ({}, action.paymentMethod);
    }
    default: 
      return state;
  }
};

export default paymentReducer;