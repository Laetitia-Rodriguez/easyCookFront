import { connect } from 'react-redux';

// Import display component
import NavigationProductsList from '../../components/NavigationProductsList';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
   console.log(state);
   return {
      productsList: state.fridge.productsList,
      selectedFoodSubgroupId: state.fridge.selectedFoodSubgroupId,
   }
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
   
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationProductsList);