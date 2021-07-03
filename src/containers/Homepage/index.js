import { connect } from 'react-redux';

// Import display component
import Homepage from '../../components/Homepage';


// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        search: state.search.search,
    }
);
  
// MapDispatchToProps is to dispatch actions in store direction (updating state)
const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
