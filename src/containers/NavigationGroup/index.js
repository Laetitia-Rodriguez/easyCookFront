import { connect } from 'react-redux';

// Import display component
import NavigationGroup from '../../components/NavigationGroup';

// Import the actions from fridge.js
import { setSelectedGroup } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        foodSubgroupsList: state.fridge.foodSubgroupsList,
        
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({  
     manageFoodGroup: (food_group_id) => {
         dispatch(setSelectedGroup(food_group_id));
     }
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationGroup);