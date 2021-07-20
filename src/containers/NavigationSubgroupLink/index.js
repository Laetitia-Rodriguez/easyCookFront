import { connect } from 'react-redux';

// Import display component
import NavigationSubgroupLink from '../../components/NavigationSubgroupLink';
import { setSelectedSubgroup, getProducts, subgroupIsOpen } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    console.log(state);
    return {
        productsReturned: state.fridge.productsReturned,
        selectedFoodSubgroupId: state.fridge.selectedFoodSubgroupId, 
        subgroupIsOpen: state.fridge.subgroupIsOpen,
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        productsList: state.fridge.productsList,
        selectedFavoriteId: state.fridge.selectedFavoriteId,
    }
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => {
        dispatch(getProducts());
    },
    manageFoodSubgroup: (food_subgroup_id) => {
        dispatch(setSelectedSubgroup(food_subgroup_id));
    },
    clickOnASubgroup: () => {
        dispatch(subgroupIsOpen());
    }
});
  
// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationSubgroupLink);