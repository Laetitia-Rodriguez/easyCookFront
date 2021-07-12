// Action types

export const GET_FOOD_GROUPS = 'GET_FOOD_GROUPS';
export const DISPLAY_FOOD_GROUPS = 'DISPLAY_FOOD_GROUPS';
export const NO_GROUP_RETURNED = 'NO_GROUP_RETURNED';
export const GET_FOOD_SUBGROUPS = 'GET_FOOD_SUBGROUPS';
export const DISPLAY_FOOD_SUBGROUPS = 'DISPLAY_FOOD_SUBGROUPS';
export const NO_SUBGROUP_RETURNED = 'NO_SUBGROUP_RETURNED';
export const FOOD_SUBGROUPS_RETURNED = 'FOOD_SUBGROUPS_RETURNED';
export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';

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



