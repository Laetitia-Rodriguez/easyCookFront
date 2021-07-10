import { connect } from 'react-redux';

// Import display component
import NavigationSubgroupsList from '../../components/NavigationSubgroupsList';

// Import the actions from fridge.js
import { getFoodSubgroups } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
       foodSubgroupsList: state.fridge.foodSubgroupsList,
       foodGroupsList: state.fridge.foodGroupsList,
       selectedFoodGroup: state.fridge.selectedFoodGroup,
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({
      loadFoodSubgroups: () => {
         dispatch(getFoodSubgroups());
      },
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationSubgroupsList);