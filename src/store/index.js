import { createStore, combineReducers } from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

//this documents combines the reducers


//import reducers
import products from './products.js';
import cartStore from './cartStore.js';

let reducers = combineReducers({products, cartStore});

const store = () =>{
    return createStore(reducers, composeWithDevTools());
};

export default store();