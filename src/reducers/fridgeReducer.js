import { DISPLAY_FOOD_GROUPS, NO_GROUP_RETURNED } from '../actions/fridge';

const initialState = {
    // Initial state, before actions
    groupsList: [],
    noGroupReturned: false,
};

function fridgeReducer(state = initialState, action = {}) {
    switch (action.type) {

        case DISPLAY_FOOD_GROUPS:
            return {
                ...state,
                groupsList: action.resultsArray,
            };

        case NO_GROUP_RETURNED:
            return {
                ...state,
                noGroupReturned: true,
            };

        default:
            return state;
    }
}

export default fridgeReducer;