import { 
    
    DISPLAY_FOOD_GROUPS,
    NO_GROUP_RETURNED,
    SET_SELECTED_GROUP,
    DISPLAY_FOOD_SUBGROUPS, 
    NO_SUBGROUP_RETURNED,
    FOOD_SUBGROUPS_RETURNED,
    IS_OPEN,
} from '../actions/fridge';

const initialState = {
    // Initial state, before actions
    foodGroupsList: [],
    noGroupReturned: false,
    foodSubgroupsList: [],
    noSubgroupReturned: false,
    selectedFoodGroupId: null,
    foodSubgroupsReturned: false,
    isOpen:false,
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

        case SET_SELECTED_GROUP:
            return {
                ...state,
                selectedFoodGroupId: action.food_group_id,
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

        case IS_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
    
        default:
            return state;
    }
}

export default fridgeReducer;