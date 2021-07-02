// Action types
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';

// Action creators
export const updateSearchInput = (newValue, name) => ({
    type: UPDATE_SEARCH_INPUT,
    newValue,
    name,
  });