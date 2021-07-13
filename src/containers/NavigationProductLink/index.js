import { connect } from 'react-redux';

// Import display component
import NavigationProductLink from '../../components/NavigationProductLink';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => {
    console.log(state);
    return {
        noProductReturned: state.fridge.noProductReturned,
        selectedFoodSubgroupId: state.fridge.selectedFoodSubgroupId,
    }
    
};
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({

});
  
// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavigationProductLink);