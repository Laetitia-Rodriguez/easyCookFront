import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

// Main reducer
import reducer from '../reducers';

// Import the middlewares
import searchMiddleware from '../middlewares/searchMiddleware';

// Combine devtools with middlewares
const enhancers = composeWithDevTools (
    applyMiddleware(
        searchMiddleware
    ),
); 

const store = createStore(
    reducer,
    enhancers,
);

export default store;