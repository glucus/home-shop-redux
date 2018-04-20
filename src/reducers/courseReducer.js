import * as actionTypes from '../actions/actionTypes';

const courseReducer = (state = [], action) => {
  switch (action.type) {

    case actionTypes.CREATE_COURSE: {

      // using [...] to create a modified copy of array in immutable way
      return [...state, Object.assign ({}, action.course)];
    }
    default: 
      return state;
  }
};

export default courseReducer;