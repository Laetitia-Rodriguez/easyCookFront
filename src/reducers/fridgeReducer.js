import { 
    DISPLAY_FOOD_GROUPS,
    NO_GROUP_RETURNED,
    SET_SELECTED_GROUP,
    DISPLAY_FOOD_SUBGROUPS, 
    NO_SUBGROUP_RETURNED,
    FOOD_SUBGROUPS_RETURNED,
    SET_SELECTED_SUBGROUP,
    DISPLAY_PRODUCTS,
    NO_PRODUCT_RETURNED,
    PRODUCTS_RETURNED,
    DISPLAY_FAVORITES, 
    SELECTED_FAVORITE,
    DISPLAY_FRIDGE_RESULTS,
    ERROR_FRIDGE_RETURNED,
    GET_RECIPES,
    GET_FAVORITES_NAMES_RESULTS,
    ERROR_FAVORITES_NAMES_RETURNED

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
    fridgeResultsList: [],
    errorFridgeReturned: false,
    fridgeResultsReturned: false,
    fridgeResultsCounter: 0,
    fridgeRedirected: false,
    errorFavoritesNamesReturned: false,
    favoritesNamesList: [],
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

            const selectedFoodGroupId = state.selectedFoodGroupId
            const id = action.id
            

            if (id === selectedFoodGroupId ) {
                // The selectedFoodSubgroupId doesn't change = we want to open or close the subgroup
                // subgroupIsOpen takes the opposite state = open or close
                nextState = {
                    ...state,
                    isOpen: !state.isOpen,
                    selectedFoodGroupId: action.id,
                }
            }
            
            else {
                // The selectedFoodSubgroupId change : we want to open another subgroup
                nextState = {
                    ...state,
                    isOpen: true,
                    selectedFoodGroupId: action.id,
                }
            }
    
                return nextState || state

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


        case SET_SELECTED_SUBGROUP:

                const selectedFoodSubgroupId = state.selectedFoodSubgroupId
                const food_subgroup_id = action.food_subgroup_id
               

                if (food_subgroup_id === selectedFoodSubgroupId ) {
                    // The selectedFoodSubgroupId doesn't change = we want to open or close the subgroup
                    // subgroupIsOpen takes the opposite state = open or close
                    nextState = {
                        ...state,
                        subgroupIsOpen: !state.subgroupIsOpen,
                        selectedFoodSubgroupId: action.food_subgroup_id,
                    }
                }
                
                else {
                    // The selectedFoodSubgroupId change : we want to open another subgroup
                    nextState = {
                        ...state,
                        subgroupIsOpen: true,
                        selectedFoodSubgroupId: action.food_subgroup_id,
                    }
                }
    
                return nextState || state

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
        
            case GET_RECIPES:
                return {
                    ...state,
                    fridgeRedirected: true,
                };
    
            case DISPLAY_FRIDGE_RESULTS:
            return {
                ...state,
                fridgeResultsList: action.fridgeResultsArray,
                fridgeResultsReturned: true,
                fridgeResultsCounter: action.fridgeResultsArray.length,
            };

        case ERROR_FRIDGE_RETURNED:
            return {
                ...state,
                errorFridgeReturned: true,
            };

        

        case GET_FAVORITES_NAMES_RESULTS:
            return {
                ...state,
                favoritesNamesList: action.favoritesNamesArray,
            };

        case ERROR_FAVORITES_NAMES_RETURNED:
            return {
                ...state,
                errorFavoritesNamesReturned: true,
            }; 


        default:
            return state;
    }
}

export default fridgeReducer;