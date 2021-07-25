import { connect } from 'react-redux';

// Import display component
import NavigationGroup from '../../components/NavigationGroup';

// Import the actions from fridge.js
import { setSelectedGroup, getFoodSubgroups } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        foodSubgroupsReturned: state.fridge.foodSubgroupsReturned,
        selectedFoodGroupId: state.fridge.selectedFoodGroupId,
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        isOpen: state.fridge.isOpen,
    }
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({  
    loadFoodSubgroups: () => {
        dispatch(getFoodSubgroups());
    },
    manageFoodGroup: (id) => {
        dispatch(setSelectedGroup(id));
    },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationGroup);