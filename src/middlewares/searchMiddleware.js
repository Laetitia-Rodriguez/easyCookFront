import axios from 'axios';

import { GET_RESULTS,  displaySearchResults, } from '../actions/search';

const searchMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_RESULTS: {
            const { search } = store.getState().search;
            axios.get()
        .then((response) => {
            console.log(response);
            store.dispatch(displaySearchResults(response.data));
          })
          .catch((error) => {
            console.log(error);
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