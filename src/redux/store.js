import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import cartReducer from "./reducers/cart";
import {userReducer} from "./reducers/user";
import ReduxLogger from 'redux-logger';


const rootReducer = combineReducers({
    cart: cartReducer, 
    user: userReducer
});

const middlewares = [ReduxThunk, ReduxLogger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;