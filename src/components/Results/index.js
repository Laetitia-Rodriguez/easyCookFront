import React from 'react';
import PropTypes from 'prop-types';

// Local import
import './results.css';
import Counter from '../../components/Counter';
// import Recipe from '../../components/Recipe';

const Results = ({
    resultsList,
    resultsReturned,
}) => {
    return (
        <>
        {resultsReturned 
        && (
            <div className="results">
                <Counter />
                <ul className="results__list">
                    {resultsList.map((result) => (
                        <li 
                            key={result.div}
                            className="results__item"
                        >
                            <div className="results__item-container">
                                <h3>{result.title}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
                <a href="/">Accueil</a>
            </div>
        )}
        </>
    );
};


Results.propTypes = {
    resultsReturned: PropTypes.bool.isRequired,
    resultsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          picture_file_name: PropTypes.string.isRequired,
          food_group: PropTypes.string.isRequired,
          food_group_id: PropTypes.number.isRequired,
          food_subgroup : PropTypes.string.isRequired,
          food_subgroup_id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
};

export default Results;