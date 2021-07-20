import { 
    DISPLAY_FOOD_GROUPS,
    NO_GROUP_RETURNED,
    SET_SELECTED_GROUP,
    DISPLAY_FOOD_SUBGROUPS, 
    NO_SUBGROUP_RETURNED,
    FOOD_SUBGROUPS_RETURNED,
    IS_OPEN,
    SET_SELECTED_SUBGROUP,
    SUBGROUP_IS_OPEN,
    DISPLAY_PRODUCTS,
    NO_PRODUCT_RETURNED,
    PRODUCTS_RETURNED,
    DISPLAY_FAVORITES, 
    SELECTED_FAVORITE,
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
    selectedFoodSubgroupId: null,
    subgroupIsOpen: false,
    productsList: [],
    noProductReturned: false,
    productsReturned: false,
    favoritesListId: [],
    selectedFavoriteId: null,
};

function fridgeReducer(state = initialState, action = {}) {
    let nextState
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
                selectedFoodGroupId: action.id,
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

        case SET_SELECTED_SUBGROUP:
            return {
                ...state,
                selectedFoodSubgroupId: action.food_subgroup_id,
            };

        case SUBGROUP_IS_OPEN:
            return {
                ...state,
                subgroupIsOpen: !state.subgroupIsOpen,
            };

        case DISPLAY_PRODUCTS:
            return {
                ...state,
                productsList: action.productsListArray,
            };

        case NO_PRODUCT_RETURNED:
            return {
                ...state,
                noProductReturned: true,
            };
        
        case PRODUCTS_RETURNED:
            return {
                ...state,
                productsReturned: true,
            };

        case SELECTED_FAVORITE:
            return {
                ...state,
                selectedFavoriteId: action.id,
            };

        case DISPLAY_FAVORITES:

            const favoriteIndex = state.favoritesListId.findIndex(id => id === action.id)
            
            if (favoriteIndex !== -1) {
                // The product is already in the favorites list, we delete it
                nextState = {
                    ...state,
                    favoritesListId : state.favoritesListId.filter((id, index) => index !== favoriteIndex)
                }
            }
            
            else {
                // The product isn't in the favorites list, we add it
                nextState = {
                    ...state,
                    favoritesListId: [...state.favoritesListId, action.id]
                }
            }

            return nextState || state   

        default:
            return state;
    }
}

export default fridgeReducer;