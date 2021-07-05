import { combineReducers } from 'redux';

// Import all the reducers
import searchReducer from './searchReducer';
import fridgeReducer from './fridgeReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    fridge: fridgeReducer,
});

export default rootReducer;