import { connect } from 'react-redux';

// Import display component
import NavigationGroup from '../../components/NavigationGroup';

// Import the actions from fridge.js
import { setSelectedGroup, getFoodSubgroups } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        foodSubgroupsReturned: state.fridge.foodSubgroupsReturned,
        foodGroupsList: state.fridge.foodGroupsList,
        selectedFoodGroupId: state.fridge.selectedFoodGroupId,
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({  
     manageFoodGroup: (food_group_id) => {
         dispatch(setSelectedGroup(food_group_id));
     },
     loadFoodSubgroups: () => {
        dispatch(getFoodSubgroups());
     },
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationGroup);