import { connect } from 'react-redux';

// Import display component
import Recipe from '../../components/Recipe';


// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
        resultsList: state.search.resultsList,
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(Recipe);