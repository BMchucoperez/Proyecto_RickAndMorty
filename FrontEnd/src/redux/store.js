import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;