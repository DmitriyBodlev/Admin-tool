import { createAction } from "redux-act";
///////////////////////////////////////////////////////////////////////////////////////////////////

export const getImagesListRequest = createAction("getImagesListRequest");
export const getImagesListSuccess = createAction("getImagesListSuccess");

export const createImageRequest = createAction("createImageRequest");
export const createImageSuccess = createAction("createImageSuccess");

export const updateImageRequest = createAction("updateImageRequest");
export const updateImageSuccess = createAction("updateImageSuccess");

export const deleteImageRequest = createAction("deleteImageRequest");
export const deleteImageSuccess = createAction("deleteImageSuccess");