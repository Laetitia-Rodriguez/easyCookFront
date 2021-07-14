import { connect } from 'react-redux';

// Import display component
import NavigationProductLink from '../../components/NavigationProductLink';
import { setFavorite } from '../../actions/fridge';

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
        selectedFavoriteId: state.fridge.selectedFavoriteId,
    }
    
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
    manageSelectedFavorite: (id) => {
        dispatch(setFavorite(id));
    }
});
  
// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationProductLink);