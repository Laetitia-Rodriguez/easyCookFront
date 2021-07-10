import { connect } from 'react-redux';

// Import display component
import NavigationSubgroupLink from '../../components/NavigationSubgroupLink';
import {  } from '../../actions/fridge';

// MapStateToProps is to read something in the state
const mapStateToProps = (state) => (
    {
       
    }
  );
  
  // MapDispatchToProps is to dispatch actions in store direction (updating state)
  const mapDispatchToProps = (dispatch) => ({

  });
  
  // === création de l'assistant
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationSubgroupLink);