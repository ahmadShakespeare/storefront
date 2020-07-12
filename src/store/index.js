import { combineReducers, createStore } from 'redux';
import { composWithDevTools } from 'redux-devtools-extension';

import categories from './categories';
import cart from './cart';
import products from './products';

let reducers = combineReducers({ categories, cart, products });

const store = () => createStore(reducers, composWithDevTools());

export default store();