import { createReducer } from "redux-act";
import { $set } from "plow-js";
import * as R from "ramda";
import * as Actions from "./actions.js";
///////////////////////////////////////////////////////////////////////////////////////////////////

export const initialState = {
  imagesList: {},
};

export const getImagesListSuccess = (state, data) =>
  $set("imagesList", data, state);

export const createImageSuccess = (state, data) =>
  $set("imagesList", R.assoc(data.id, data, state.imagesList), state);

export const updateImageSuccess = (state, data) =>
  $set("imagesList", R.assoc(data.id, data, state.imagesList), state);

export const deleteImageSuccess = (state, guid) =>
  $set(
    "imagesList",
    R.filter(
      image => R.not(R.equals(image.id, guid)),
      state.imagesList
    ),
    state
  );

export default createReducer(
  {
    [Actions.getImagesListSuccess]: getImagesListSuccess,
    [Actions.createImageSuccess]: createImageSuccess,
    [Actions.updateImageSuccess]: updateImageSuccess,
    [Actions.deleteImageSuccess]: deleteImageSuccess
  },
  initialState
);
