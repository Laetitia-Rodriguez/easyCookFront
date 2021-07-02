import { connect } from 'react-redux';

// Import display component
import SearchBar from '../../components/SearchBar';

// Import the actions from search.js
import { updateSearchInput } from '../../actions/search';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
      search: state.search.search,
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({
    // function wich is dispatching the action
    setSearchInput: (newValue, name) => {
      dispatch(updateSearchInput(newValue, name));
    },
  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);