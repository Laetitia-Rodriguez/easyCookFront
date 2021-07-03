// Action types
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const GET_RESULTS = 'GET_RESULTS';
export const DISPLAY_SEARCH_RESULTS = 'DISPLAY_SEARCH_RESULTS';
export const RESULTS_RETURNED = 'RESULTS_RETURNED';

// Action creators
export const updateSearchInput = (newValue, name) => ({
    type: UPDATE_SEARCH_INPUT,
    newValue,
    name,
  });

export const getResults = () => ({
  type: GET_RESULTS,
});

export const displaySearchResults = (resultsArray) => ({
  type: DISPLAY_SEARCH_RESULTS,
  resultsArray,
});

export const resultsReturned = () => ({
  type: RESULTS_RETURNED,
});