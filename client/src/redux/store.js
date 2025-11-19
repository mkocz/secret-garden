import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import initialState from './initialState';
import productsReducer from './productsReducer';
import  cartReducer  from './cartReducer';
import thunk from 'redux-thunk';

const subreducers = {
    products: productsReducer,
    cart: cartReducer
}

const reducer = combineReducers(subreducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
