import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
// components
import loader from './components/loader/reducer';
import modal from './components/modal/reducer';
// features
import images from './features/images/reducer';
///////////////////////////////////////////////////////////////////////////////////////////////////

const appReducer = combineReducers({
  router,
  images,
  modal,
  loader,
});

const rootReducer = (state: Object, action: Object) => {
  return appReducer(state, action);
};

export default rootReducer;
