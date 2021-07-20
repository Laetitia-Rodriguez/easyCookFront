import axios from 'axios';

import { 
    GET_FOOD_GROUPS,
    displayFoodGroups,
    noGroupReturned,
    GET_FOOD_SUBGROUPS,
    displayFoodSubgroups, 
    noSubgroupReturned,
    foodSubgroupsReturned,
    GET_PRODUCTS,
    displayProducts,
    noProductReturned,
    productsReturned,
    SET_FAVORITE,
    messageOk,

} from '../actions/fridge';

const fridgeMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
       
        case GET_FOOD_GROUPS: {
          axios.get('http://127.0.0.1:8000/api/products/groups')
            .then((response) => {
                // console.log(response);
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

        case GET_FOOD_SUBGROUPS: {
          axios.get('http://127.0.0.1:8000/api/products/subgroups')
            .then((response) => {
            // console.log(response);
            store.dispatch(displayFoodSubgroups(response.data));
            store.dispatch(foodSubgroupsReturned());
            })
            .catch((error) => {
              console.log(error);
              store.dispatch(noSubgroupReturned());
            })
            .finally(() => {
            });
            next(action);
            break;
        }

        case GET_PRODUCTS: {
          axios.get('http://127.0.0.1:8000/api/products')
            .then((response) => {
                // console.log(response);
                store.dispatch(displayProducts(response.data));
                store.dispatch(productsReturned());
              })
            .catch((error) => {
              store.dispatch(noProductReturned());
            })
            .finally(() => {
            });
            next(action);
            break;
        }

        case SET_FAVORITE: {
          const { selectedFavoriteId } = store.getState().fridge;
          console.log(selectedFavoriteId);
          axios.put(`http://127.0.0.1:8000/api/products/${selectedFavoriteId}/status`)
            .then((response) => {
                // console.log(response);
                store.dispatch(messageOk(response.data));
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

export default fridgeMiddleware;