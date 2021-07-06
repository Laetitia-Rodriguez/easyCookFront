import { connect } from 'react-redux';

// Import display component
import Fridge from '../../components/Fridge';

// Import the actions from fridge.js
import { getFoodGroups, updateFoodGroupName, fetchFoodSubgroups } from '../../actions/fridge';


// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
  console.log(state);
  return {
        foodGroupsList: state.fridge.foodGroupsList,
        noGroupReturned: state.fridge.noGroupReturned,
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        noSubgroupReturned: state.fridge.noGroupReturned,
        foodSubgroupsReturned: state.fridge.foodSubgroupsReturned,
        foodGroupName: state.fridge.foodGroupName,
    }
  };
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => {
      console.log(dispatch);
      return {
        loadFoodGroups: () => {
        dispatch(getFoodGroups());
      },
      manageOnClick: (food_group) => {
        dispatch(updateFoodGroupName(food_group));
        dispatch(fetchFoodSubgroups());
      },
      }
      
  };
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
