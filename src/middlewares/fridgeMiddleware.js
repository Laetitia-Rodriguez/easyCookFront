import axios from 'axios';

import { GET_FOOD_GROUPS, displayFoodGroups, noGroupReturned } from '../actions/fridge';

const fridgeMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
       
        case GET_FOOD_GROUPS: {
          axios.get('http://127.0.0.1:8000/api/products/groups')
      .then((response) => {
          console.log(response);
          store.dispatch(displayFoodGroups(response.data));
        })
        .catch((error) => {
          store.dispatch(noGroupReturned());
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

export default fridgeMiddleware;