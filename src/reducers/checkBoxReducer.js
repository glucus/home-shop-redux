
import * as actionTypes from '../actions/actionTypes';

const checkBoxReducer = (state = {}, action) => {
  switch (action.type) {

    case actionTypes.CHANGE_CHECKBOX_VALUE: {
      return Object.assign ({}, state, {[action.field]: action.value});
    }
    default: 
      return state;
  }
};

export default checkBoxReducer;


/*
  handleChange (e) {
    const field = e.target.name;
    const value = e.target.checked;
    this.setState ({
      [field]: value
    });
  }
  */