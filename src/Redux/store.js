import { reducer as authReducer } from "./Auth Redux/reducer";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer : authReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


