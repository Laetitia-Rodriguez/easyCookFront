import { connect } from 'react-redux';

// Import display component
import NavigationSubgroupsList from '../../components/NavigationSubgroupsList';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
       foodGroupsList: state.fridge.foodGroupsList,
       selectedFoodGroupId: state.fridge.selectedFoodGroupId,
       foodSubgroupsList: state.fridge.foodSubgroupsList,
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({
      
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationSubgroupsList);