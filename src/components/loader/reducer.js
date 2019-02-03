import { createReducer } from 'redux-act';
import { $set } from 'plow-js';
import * as Actions from './actions.js';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const initialState = {
  isOpened: false,
};

export const openLoader = (state: Object, payload: Object = false) => (
 $set('isOpened', true, state)
);

export const closeLoader = (state: Object) => (
  $set('isOpened', false, state)
);

export default createReducer({
  [Actions.openLoader]: openLoader,
  [Actions.closeLoader]: closeLoader,
}, initialState);
