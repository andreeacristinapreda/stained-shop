import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import cartReducer from "./cart/cartReducer";
import {userReducer} from "./user/userReducer";
import ReduxLogger from 'redux-logger';
import favouritesReducer from './favourites/favouritesReducer';


const rootReducer = combineReducers({
    cart: cartReducer, 
    user: userReducer,
    favourites: favouritesReducer
});

const middlewares = [ReduxThunk, ReduxLogger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;