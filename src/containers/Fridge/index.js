import { connect } from 'react-redux';

// Import display component
import Fridge from '../../components/Fridge';

// Import the actions from fridge.js
import {  getFoodGroups, getFavoritesNames, getRecipes } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        noGroupReturned: state.fridge.noGroupReturned,
        foodGroupsList: state.fridge.foodGroupsList,
    }    
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
    loadFoodGroups: () => {
        dispatch(getFoodGroups());
    },
    manageFridgeSubmit: () => {
        dispatch(getFavoritesNames());
      },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
