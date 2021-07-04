import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// Local import
import './results.css';
import Counter from '../../containers/Counter';

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
                <a className="results__return-button" href="/">Accueil</a>
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
          picture_file_name: PropTypes.string,
        }).isRequired,
      ).isRequired,
};

export default Results;