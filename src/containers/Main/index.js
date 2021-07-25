import { connect } from 'react-redux';

// Import display component
import Main from '../../components/Main';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        redirect: state.search.redirect,
        resultsList: state.search.resultsList,
        fridgeRedirected: state.fridge.fridgeRedirected,
        fridgeResultsList: state.fridge.fridgeResultsList,
    }
);

// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Main);

