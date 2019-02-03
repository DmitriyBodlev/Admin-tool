/* eslint-disable */
import {
    createStore as createReduxStore,
    applyMiddleware,
    compose
  } from "redux";
  import { createLogicMiddleware } from "redux-logic";
  import reducers from "./reducer";
  import arrLogic from "./logic";
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  
  let initialState = {};
  
  function createStore() {
    const logicMiddleware = createLogicMiddleware(arrLogic);
    const middleWares = [logicMiddleware];
    const composables = [applyMiddleware(...middleWares)];
    const store = createReduxStore(
      reducers,
      initialState,
      compose(...composables)
    );
    if (module.hot) {
      module.hot.accept("./reducer", () => {
        store.replaceReducer(reducers);
      });
    }
    return store;
  }
  
  export default createStore;
  /* eslint-enable */
  