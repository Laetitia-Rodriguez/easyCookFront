import { UPDATE_SEARCH_INPUT } from '../actions/search';

const initialState = {
    // Initial state, before actions
    search: '',
};

function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_SEARCH_INPUT:
            console.log(action);
            return {
              ...state,
              [action.name]: action.newValue,
            };
            
        default:
            return state;
    }
}

export default searchReducer;