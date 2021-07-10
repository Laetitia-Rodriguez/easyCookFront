import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Local import
import './fridge.css';
import NavigationGroupsList from '../../containers/NavigationGroupsList';
import NavigationSubgroupsList from '../../containers/NavigationSubgroupsList';

const Fridge = ({
    loadFoodGroups,
    noGroupReturned,
    foodGroupsList,
}) => {

    useEffect (() => {
        loadFoodGroups();
    }, []);

    console.log(foodGroupsList);

    return (
        <div className="fridge">
            <NavigationGroupsList {... foodGroupsList} />
            <NavigationSubgroupsList />
            {noGroupReturned && (
                <p>Erreur de connexion à la base de données</p>
            )}
            <div className="fridge__submit-container">
                <input className="fridge__submit-button" type="submit" value="Chercher des recettes"/>
                <button className="fridge__button" type="submit">
                    <FontAwesomeIcon icon={faSearch} className="fridge__button-icon"/>
                </button>
            </div>
        </div>
    );

}

Fridge.propTypes = {
    loadFoodGroups: PropTypes.func.isRequired,
    noGroupReturned: PropTypes.bool,
    foodGroupsList: PropTypes.arrayOf(
        PropTypes.shape({
            food_group: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Fridge;