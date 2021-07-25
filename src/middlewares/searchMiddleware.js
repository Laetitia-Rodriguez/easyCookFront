import axios from 'axios';

import { GET_RESULTS,  displaySearchResults, errorReturned } from '../actions/search';
const searchMiddleware = (store) => (next) => (action) => {
    switch (action.type) {

        // Get the recipes list with a search from the homepage
        // with a single product
        case GET_RESULTS: {
            const { search } = store.getState().search;
            axios.get(`http://127.0.0.1:8000/api/recipes?ingredientsList=${search}`)
              .then((response) => {
                  console.log(response);
                  store.dispatch(displaySearchResults(response.data));
                })
              .catch((error) => {
                  store.dispatch(errorReturned());
              })
              .finally(() => {
              });
              next(action);
              break;
        }

      default:
        // Next middleware or reducer
        next(action);
    }
};

export default searchMiddleware;