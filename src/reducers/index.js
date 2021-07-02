import { combineReducers } from 'redux';

// Import all the reducers
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    search: searchReducer,
});

export default rootReducer;