import { connect } from 'react-redux';

// Import display component
import NavigationSubgroupsList from '../../components/NavigationSubgroupsList';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
   {
      foodSubgroupsList: state.fridge.foodSubgroupsList,
      selectedFoodGroupId: state.fridge.selectedFoodGroupId,
   }
);
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
   
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationSubgroupsList);