import { createStore, combineReducers } from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

//this documents combines the reducers


//import reducers
import products from './products.js';

let reducers = combineReducers({products});

const store = () =>{
    return createStore(reducers, composeWithDevTools());
};

export default store();