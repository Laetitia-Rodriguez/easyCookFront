// Action types
export const DISPLAY_FOOD_GROUPS = 'DISPLAY_FOOD_GROUPS';
export const NO_GROUP_RETURNED = 'NO_GROUP_RETURNED';
export const GET_FOOD_GROUPS = 'GET_FOOD_GROUPS';

// Action creators
export const getFoodGroups = () => ({
  type: GET_FOOD_GROUPS,
});

export const displayFoodGroups = (resultsArray) => ({
  type: DISPLAY_FOOD_GROUPS,
  resultsArray,
});

export const noGroupReturned = () => ({
  type: NO_GROUP_RETURNED,
});
