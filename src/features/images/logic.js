import { createLogic } from "redux-logic";
import firebase from "firebase";
import * as R from "ramda";
// global
import { fire, storage } from "../../firebaseApp";
// components
import { openLoader, closeLoader } from '../../components/loader/actions';
import { closeModal } from '../../components/modal/actions';
// feature image
import {
  createImageRequest,
  createImageSuccess,
  updateImageRequest,
  updateImageSuccess,
  deleteImageRequest,
  deleteImageSuccess,
  getImagesListRequest,
  getImagesListSuccess } from "./actions";
import { valuesToPick } from './constants';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const handleGetImagesLogic = createLogic({
  type: getImagesListRequest,
  process({ getState, action }, dispatch, done) {
    dispatch(openLoader())
    let imagesRef = fire
      .database()
      .ref("images")
      .orderByKey()
      .limitToLast(100);
    imagesRef
      .once("value")
      .then(snapshot => {
        const images = R.mapObjIndexed(
          (value, key) => R.assoc("id", key, value),
          snapshot.val() || []
        );
        dispatch(getImagesListSuccess(images));
      })
      .catch(error => dispatch(closeLoader()))
      .then(() => {
        dispatch(closeLoader())
        done()
      });
  }
});

const uploadImage = (payload, callback) => {
  let uploadTask = storage.ref().child('images/' + payload.name + '.img').put(payload.imageFile);
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
        default: break;
      }
    }, (error) => {
      console.log(error);
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        callback(R.pick(valuesToPick, R.assoc('imageURL', downloadURL, payload)))
      });
    });
}

export const handleCreateImageLogic = createLogic({
  type: createImageRequest,
  process({ getState, action }, dispatch, done) {
    dispatch(openLoader())
    uploadImage(
      action.payload,
      (data) => (
        fire
          .database()
          .ref("images")
          .push(data)
          .then(value => {
            dispatch(
              createImageSuccess(R.assoc("id", value.key, data))
            );
            dispatch(
              closeModal()
            );
          })
          .catch((error) => dispatch(closeLoader()))
          .then(() => {
            dispatch(closeLoader());
            done();
          })
      )
    )
  }
});

export const handleUpdateImageLogic = createLogic({
  type: updateImageRequest,
  process({ getState, action }, dispatch, done) {
    dispatch(openLoader())
    const data = R.pick(valuesToPick, action.payload);
    const updateFunction = (newData) => {
      fire
        .database()
        .ref("images/" + newData.id)
        .update(newData)
        .then(() => {
          dispatch(updateImageSuccess(newData));
          dispatch(closeModal());
        })
        .catch((error) => dispatch(closeLoader()))
        .then(() => {
          dispatch(closeLoader());
          done();
        });
    }
    if (action.payload.withImageUpdate) {
      uploadImage(
        action.payload,
        (newData) => updateFunction(newData)
      )
    } else {
      updateFunction(data);
    }
  }
});

export const handleDeleteImageLogic = createLogic({
  type: deleteImageRequest,
  process({ getState, action }, dispatch, done) {
    dispatch(openLoader())
    const imagesState = getState().images;
    const toUpdate = R.map(image => {
      if (R.equals(image.id, action.payload)) {
        return null;
      }
      return image;
    }, imagesState.imagesList);
    fire
      .database()
      .ref("images/")
      .update(toUpdate)
      .then(snapshot => {
        dispatch(deleteImageSuccess(action.payload));
      })
      .catch(error => dispatch(closeLoader()))
      .then(() => {
        dispatch(closeLoader());
        done();
      });
  }
});

export default [
  handleGetImagesLogic,
  handleCreateImageLogic,
  handleUpdateImageLogic,
  handleDeleteImageLogic
];
