import { 
    DISPLAY_FOOD_GROUPS,
    NO_GROUP_RETURNED,
    DISPLAY_FOOD_SUBGROUPS,
    NO_SUBGROUP_RETURNED,
    FOOD_SUBGROUPS_RETURNED,
    UPDATE_FOOD_GROUP_NAME} from '../actions/fridge';

const initialState = {
    // Initial state, before actions
    foodGroupsList: [],
    noGroupReturned: false,
    foodSubgroupsList: [],
    noSubgroupReturned: false,
    foodGroupName: '',
    foodSubgroupsReturned: false,
};

function fridgeReducer(state = initialState, action = {}) {
    switch (action.type) {

        case DISPLAY_FOOD_GROUPS:
            return {
                ...state,
                foodGroupsList: action.foodGroupsListArray,
            };

        case NO_GROUP_RETURNED:
            return {
                ...state,
                noGroupReturned: true,
            };

        case UPDATE_FOOD_GROUP_NAME:
            return {
                ...state,
                foodGroupName: action.food_group,
            };

        case DISPLAY_FOOD_SUBGROUPS:
            return {
                ...state,
                foodSubgroupsList: action.foodSubgroupsListArray,
            };

        case NO_SUBGROUP_RETURNED:
            return {
                ...state,
                noSubgroupReturned: true,
            };
        
        case FOOD_SUBGROUPS_RETURNED:
            return {
                ...state,
                foodSubgroupsReturned: true,
            };

        default:
            return state;
    }
}

export default fridgeReducer;