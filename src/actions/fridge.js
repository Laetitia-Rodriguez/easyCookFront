// Action types

export const GET_FOOD_GROUPS = 'GET_FOOD_GROUPS';
export const DISPLAY_FOOD_GROUPS = 'DISPLAY_FOOD_GROUPS';
export const NO_GROUP_RETURNED = 'NO_GROUP_RETURNED';
export const GET_FOOD_SUBGROUPS = 'GET_FOOD_SUBGROUPS';
export const DISPLAY_FOOD_SUBGROUPS = 'DISPLAY_FOOD_SUBGROUPS';
export const NO_SUBGROUP_RETURNED = 'NO_SUBGROUP_RETURNED';
export const FOOD_SUBGROUPS_RETURNED = 'FOOD_SUBGROUPS_RETURNED';
export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';
export const IS_OPEN = 'IS_OPEN';
export const SET_SELECTED_SUBGROUP = 'SET_SELECTED_SUBGROUP';
export const SUBGROUP_IS_OPEN = 'SUBGROUP_IS_OPEN';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';
export const NO_PRODUCT_RETURNED = 'NO_PRODUCT_RETURNED';
export const PRODUCTS_RETURNED = 'PRODUCTS_RETURNED';
export const SET_FAVORITE = 'SET_FAVORITE' ;

// Action creators
export const getFoodGroups = () => ({
  type: GET_FOOD_GROUPS,
});

export const displayFoodGroups = (foodGroupsListArray) => ({
  type: DISPLAY_FOOD_GROUPS,
  foodGroupsListArray,
});

export const noGroupReturned = () => ({
  type: NO_GROUP_RETURNED,
});

export const getFoodSubgroups = () => ({
  type: GET_FOOD_SUBGROUPS, 
}); 

export const displayFoodSubgroups = (foodSubgroupsListArray) => ({
  type: DISPLAY_FOOD_SUBGROUPS,
  foodSubgroupsListArray,
}); 

export const noSubgroupReturned = () => ({
  type: NO_SUBGROUP_RETURNED,
});

export const foodSubgroupsReturned = () => ({
  type: FOOD_SUBGROUPS_RETURNED,
});

export const setSelectedGroup = (food_group_id) => ({
  type: SET_SELECTED_GROUP,
  food_group_id,
});

export const isOpen = () => ({
  type: IS_OPEN,
});

export const setSelectedSubgroup = (food_subgroup_id) => ({
  type: SET_SELECTED_SUBGROUP,
  food_subgroup_id,
});

export const subgroupIsOpen = () => ({
  type: SUBGROUP_IS_OPEN,
});

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const displayProducts = (productsListArray) => ({
  type: DISPLAY_PRODUCTS,
  productsListArray,
});

export const noProductReturned = () => ({
  type: NO_PRODUCT_RETURNED,
});

export const productsReturned = () => ({
  type: PRODUCTS_RETURNED,
});

export const setFavorite = (id) => ({
  type: SET_FAVORITE,
  id,
})




