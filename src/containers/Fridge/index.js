import { connect } from 'react-redux';

// Import display component
import Fridge from '../../components/Fridge';

// Import the actions from fridge.js
import { getFoodGroups } from '../../actions/fridge';


// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    return {
        groupsList: state.fridge.groupsList,
        noGroupReturned: state.fridge.noGroupReturned,
    }
  };
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({
    loadFoodGroups: () => {
        dispatch(getFoodGroups());
      },
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(Fridge);