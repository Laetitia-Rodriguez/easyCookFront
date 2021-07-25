import { connect } from 'react-redux';

// Import display component
import Recipe from '../../components/Recipe';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        resultsReturned: state.search.resultsReturned,
        resultsList: state.search.resultsList,
        fridgeResultsReturned: state.fridge.fridgeResultsReturned,
        fridgeResultsList: state.fridge.fridgeResultsList,
    }
);
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);