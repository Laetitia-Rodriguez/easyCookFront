import { connect } from 'react-redux';

// Import display component
import NavigationProductLink from '../../components/NavigationProductLink';
import { selectedFavorite, setFavorite, displayFavorites } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    console.log(state);
    return {
        noProductReturned: state.fridge.noProductReturned,
        selectedFoodSubgroupId: state.fridge.selectedFoodSubgroupId,
        productsReturned: state.fridge.productsReturned, 
        subgroupIsOpen: state.fridge.subgroupIsOpen,
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        productsList: state.fridge.productsList,
        favoritesListId: state.fridge.favoritesListId,
    }
    
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
    manageSelectedFavorite: (id) => {
        dispatch(selectedFavorite(id));
        dispatch(setFavorite(id));
        dispatch(displayFavorites(id));
    }
});
  
// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationProductLink);