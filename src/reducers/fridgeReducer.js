import { 
    SET_SELECTED_GROUP,
    DISPLAY_FOOD_GROUPS,
    NO_GROUP_RETURNED,
    DISPLAY_FOOD_SUBGROUPS, 
    NO_SUBGROUP_RETURNED,
    FOOD_SUBGROUPS_RETURNED,
} from '../actions/fridge';

const initialState = {
    // Initial state, before actions
    foodGroupsList: [],
    foodSubgroupsList: [],
    noGroupReturned: false,
    noSubgroupReturned: false,
    selectedFoodGroupId: null,
    foodSubgroupsReturned: false,
    group: {},
};

function fridgeReducer(state = initialState, action = {}) {
    switch (action.type) {

        case SET_SELECTED_GROUP:
            return {
                ...state,
                selectedFoodGroupId: action.food_group_id,
            };
        
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