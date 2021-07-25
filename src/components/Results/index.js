import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// Local import
import './results.css';
import Counter from '../../containers/Counter';

const Results = ({
    resultsList,
    resultsReturned,
    errorReturned,
    fridgeResultsList,
    fridgeResultsReturned,
    errorFridgeReturned,
}) => {
    return (
        <div className="results">
            {resultsReturned && (
                <>
                    <Counter />
                    <ul className="results__list">
                        {resultsList.map((result) => (
                            <li 
                                key={result.id}
                                className="results__item"
                            >
                            <Link
                                to={`/recette/${result.id}`}
                                className="results__item-link"
                            >
                                <h3>{result.name}</h3>
                                {/*  TODO URI */}
                                <img src={ 'http://127.0.0.1/easyCookAPI/src/utils/images/recipes/' + result.pictureFileName }  className="results__image" alt={result.name}/>
                            </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {errorReturned && (
                <p>Une erreur est apparue.<br/> Veuillez recommencer.</p>
            )}
            {fridgeResultsReturned && (
                <>
                    <Counter />
                    <ul className="fridge_results__list">
                        {fridgeResultsList.map((fridge_result) => (
                            <li 
                                key={fridge_result.id}
                                className="fridge_results__item"
                            >
                            <Link
                                to={`/recette/${fridge_result.id}`}
                                className="fridge_results__item-link"
                            >
                                <h3>{fridge_result.name}</h3>
                                {/*  TODO URI */}
                                <img src={ 'http://127.0.0.1/easyCookAPI/src/utils/images/recipes/' + fridge_result.pictureFileName }  className="fridge_results__image" alt={fridge_result.name}/>
                            </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {errorFridgeReturned && (
                <p>Une erreur est apparue.<br/> Veuillez recommencer.</p>
            )}
            <a className="results__return-button" href="/">Accueil</a>
        </div>
    )
}

Results.propTypes = {
    resultsReturned: PropTypes.bool.isRequired,
    resultsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          picture_file_name: PropTypes.string,
        }).isRequired,
      ).isRequired,
    errorReturned: PropTypes.bool.isRequired,
    fridgeResultsReturned: PropTypes.bool.isRequired,
    fridgeResultsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          picture_file_name: PropTypes.string,
        }).isRequired,
      ).isRequired,
    errorFridgeReturned: PropTypes.bool.isRequired,
};

export default Results;