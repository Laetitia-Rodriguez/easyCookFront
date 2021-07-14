import { connect } from 'react-redux';

// Import display component
import NavigationGroup from '../../components/NavigationGroup';

// Import the actions from fridge.js
import { setSelectedGroup, getFoodSubgroups, isOpen } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    console.log(state);
    return {
        foodSubgroupsReturned: state.fridge.foodSubgroupsReturned,
        selectedFoodGroupId: state.fridge.selectedFoodGroupId,
        foodGroupsList: state.fridge.foodGroupsList,
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        isOpen: state.fridge.isOpen,
    }
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({  
    loadFoodSubgroups: () => {
        dispatch(getFoodSubgroups());
    },
    manageFoodGroup: (food_group_id) => {
        dispatch(setSelectedGroup(food_group_id));
    },
    clickOnAGroup: () => {
        dispatch(isOpen());
    }
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationGroup);