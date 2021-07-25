import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({resultsReturned, fridgeResultsReturned, resultsCounter, fridgeResultsCounter}) => (
    <div>
       {resultsReturned && (
            <p className="counter">
                Vous pouvez faire {resultsCounter} recettes.
            </p>
        )}
        {fridgeResultsReturned && (
            <p className="counter">
                Vous pouvez faire {fridgeResultsCounter} recettes.
            </p>
        )}
    </div>  
);

Counter.propTypes = {
    resultsReturned: PropTypes.bool.isRequired,
    resultsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          picture_file_name: PropTypes.string,
        }).isRequired,
      ),
    fridgeResultsReturned: PropTypes.bool.isRequired,
    fridgeResultsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          picture_file_name: PropTypes.string,
        }).isRequired,
      ),
};

export default Counter;
  