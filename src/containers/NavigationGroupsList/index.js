import { connect } from 'react-redux';

// Import display component
import NavigationGroupsList from '../../components/NavigationGroupsList';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
   {
      foodGroupsList: state.fridge.foodGroupsList,
   }
);
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
   
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationGroupsList);