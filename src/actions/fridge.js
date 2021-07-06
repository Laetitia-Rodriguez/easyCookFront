// Action types
export const GET_FOOD_GROUPS = 'GET_FOOD_GROUPS';
export const DISPLAY_FOOD_GROUPS = 'DISPLAY_FOOD_GROUPS';
export const NO_GROUP_RETURNED = 'NO_GROUP_RETURNED';
export const UPDATE_FOOD_GROUP_NAME = 'UPDATE_FOOD_GROUP_NAME';
export const DISPLAY_FOOD_SUBGROUPS = 'DISPLAY_FOOD_SUBGROUPS';
export const NO_SUBGROUP_RETURNED = 'NO_SUBGROUP_RETURNED';
export const FOOD_SUBGROUPS_RETURNED = 'FOOD_SUBGROUPS_RETURNED';
export const FETCH_FOOD_SUBGROUPS = 'FETCH_FOOD_SUBGROUPS';


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

export const updateFoodGroupName = (food_group) => ({
  type: UPDATE_FOOD_GROUP_NAME, 
  food_group,
});

export const fetchFoodSubgroups = (food_group) => ({
  type: FETCH_FOOD_SUBGROUPS, 
  food_group,
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

