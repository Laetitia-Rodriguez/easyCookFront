import { connect } from 'react-redux';

// Import display component
import Counter from '../../components/Counter';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        resultsList: state.search.resultsList,
        resultsCounter: state.search.resultsCounter,
    }
);

// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
  // function wich is dispatching the action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
