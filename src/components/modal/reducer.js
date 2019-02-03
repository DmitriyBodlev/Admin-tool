import { createReducer } from 'redux-act';
import * as Actions from './actions';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const initialState = {
  modal: {},
  isOpened: false,
};

export const openModal = (state: Object, payload: Object) => ({
  modal: payload,
  isOpened: true,
});

export const closeModal = (state: Object) => ({
  modal: initialState.modal,
  isOpened: false,
});

export default createReducer({
  [Actions.openModal]: openModal,
  [Actions.closeModal]: closeModal,
}, initialState);
