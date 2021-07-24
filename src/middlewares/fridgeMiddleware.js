import axios from 'axios';
import qs from 'qs';

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
    getRecipes,
    GET_RECIPES,
    displayFridgeResults,
    errorFridgeReturned,
    GET_FAVORITES_NAMES,
    getFavoritesNamesResults,
    errorFavoritesNamesReturned


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

        // Request to get from the DB the list of available products 
        // (selected previously in fridge page)
        // and then put the names of the products
        // in the searchFilter of the GET_RECIPE request
        case GET_FAVORITES_NAMES: {
          axios.get(`http://127.0.0.1:8000/api/products/status`)
            .then((response) => {
                console.log(response);
                store.dispatch(getFavoritesNamesResults(response.data));
                store.dispatch(getRecipes());
              })
            .catch((error) => {
                store.dispatch(errorFavoritesNamesReturned());
            })
            .finally(() => {
            });
            next(action);
            break;
        } 

        // Get the recipes list with a search from the fridge page
        // with multiple products
        case GET_RECIPES: {

          const { favoritesNamesList } = store.getState().fridge;
          console.log(favoritesNamesList);

          var list = [];

          for (let i=0; i<favoritesNamesList.length; i++) {
            var ingredient = favoritesNamesList[i] ; 
            console.log(ingredient); 
            var {name} = ingredient; 
            console.log(name);
            list.push(name);
             console.log(list);
          } 

          axios.get('http://127.0.0.1:8000/api/recipes', {
            params:{
              ingredientsList: list
            },
            paramsSerializer: function(params) {
              const newParams = params.ingredientsList.map(_=>`ingredientsList[]=${_}`).join('&')
              return newParams
            },
          })
            .then((response) => {
                console.log(response);
                store.dispatch(displayFridgeResults(response.data));
              })
            .catch((error) => {
                store.dispatch(errorFridgeReturned());
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