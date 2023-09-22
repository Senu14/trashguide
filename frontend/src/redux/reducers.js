// reducers.js
import { SET_SELECTED_VALUE } from './actionTypes';

const initialState = {
  selectedValue: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_VALUE:
      return {
        ...state,
        selectedValue: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
