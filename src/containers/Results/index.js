import { connect } from 'react-redux';

// Import display component
import Results from '../../components/Results';


// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        resultsList: state.search.resultsList,
        resultsReturned: state.search.resultsReturned,
        errorReturned: state.search.errorReturned,
    }
  );
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Results);