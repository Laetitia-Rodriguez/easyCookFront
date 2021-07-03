import { UPDATE_SEARCH_INPUT, GET_RESULTS, RESULTS_RETURNED, DISPLAY_SEARCH_RESULTS, } from '../actions/search';

const initialState = {
    // Initial state, before actions
    search: '',
    resultsList: [],
    resultsReturned: false,
    redirect: false,
};

function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_SEARCH_INPUT:
            console.log(action);
            return {
              ...state,
              [action.name]: action.newValue,
            };

        case GET_RESULTS:
            return {
                ...state,
                redirect: true,
            };

        case RESULTS_RETURNED:
            return {
                ...state,
                resultsReturned: true,
            };

        case DISPLAY_SEARCH_RESULTS:
            return {
                ...state,
                resultsList: action.resultsArray,
                resultsReturned: true,
            };
        
        default:
            return state;
    }
}

export default searchReducer;