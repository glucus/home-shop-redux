
import * as actionTypes from './actionTypes';

export const changeCheckBoxValue = (name, value) => {
  return {
    type: actionTypes.CHANGE_CHECKBOX_VALUE,
    name: name,
    value: value
  };
};

export const selectPaymentMethod = (paymentMethod) => {
  return {
    type: actionTypes.SELECT_PAYMENT_METHOD,
    paymentMethod: paymentMethod
  };
};
