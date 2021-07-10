// Action types

export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';
export const GET_FOOD_GROUPS = 'GET_FOOD_GROUPS';
export const GET_FOOD_SUBGROUPS = 'GET_FOOD_SUBGROUPS';
export const DISPLAY_FOOD_GROUPS = 'DISPLAY_FOOD_GROUPS';
export const DISPLAY_FOOD_SUBGROUPS = 'DISPLAY_FOOD_SUBGROUPS';
export const NO_GROUP_RETURNED = 'NO_GROUP_RETURNED';
export const NO_SUBGROUP_RETURNED = 'NO_SUBGROUP_RETURNED';

export const UPDATE_FOOD_GROUP_NAME = 'UPDATE_FOOD_GROUP_NAME';
export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';

// Action creators

export const setSelectedGroup = (food_group_id) => ({
  type: SET_SELECTED_GROUP,
  food_group_id,
});

export const getFoodGroups = () => ({
  type: GET_FOOD_GROUPS,
});

export const getFoodSubgroups = () => ({
  type: GET_FOOD_SUBGROUPS, 
}); 

export const displayFoodGroups = (foodGroupsListArray) => ({
  type: DISPLAY_FOOD_GROUPS,
  foodGroupsListArray,
});

export const displayFoodSubgroups = (foodSubgroupsListArray) => ({
  type: DISPLAY_FOOD_SUBGROUPS,
  foodSubgroupsListArray,
}); 

export const noGroupReturned = () => ({
  type: NO_GROUP_RETURNED,
});

export const noSubgroupReturned = () => ({
  type: NO_SUBGROUP_RETURNED,
});


/* 

export const updateFoodGroupName = (food_group) => ({
  type: UPDATE_FOOD_GROUP_NAME, 
  food_group,
});

export const displayProducts = () => ({
  type: DISPLAY_PRODUCTS,
});
 */


