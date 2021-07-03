import { UPDATE_SEARCH_INPUT, DISPLAY_SEARCH_RESULTS, RESULTS_RETURNED } from '../actions/search';

const initialState = {
    // Initial state, before actions
    search: '',
    resultsList: [],
    resultsReturned: false,
};

function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_SEARCH_INPUT:
            console.log(action);
            return {
              ...state,
              [action.name]: action.newValue,
            };

        case DISPLAY_SEARCH_RESULTS:
            return {
                ...state,
                resultsList: action.resultsArray,
            };
        
        case RESULTS_RETURNED:
            return {
                ...state,
                resultsReturned: true,
            };
            
        default:
            return state;
    }
}

export default searchReducer;