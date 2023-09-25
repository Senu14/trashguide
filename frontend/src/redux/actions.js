import { SET_SELECTED_VALUE } from './actionTypes';

export const setSelectedValue = (value) => {
  return {
    type: SET_SELECTED_VALUE,
    payload: value,
  };
};
