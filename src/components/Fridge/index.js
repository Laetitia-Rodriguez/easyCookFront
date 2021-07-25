import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Local import
import './fridge.css';
import NavigationGroupsList from '../../containers/NavigationGroupsList';

const Fridge = ({
    loadFoodGroups,
    noGroupReturned,
    foodGroupsList,
    manageFridgeSubmit 
}) => {

    useEffect (() => {
        loadFoodGroups();
    }, []);

    // console.log(foodGroupsList);

    const handleSubmit = (event) => {
        event.preventDefault();
        manageFridgeSubmit();
    };

    return (
        <div className="fridge">
            <h1 className="fridge__title">Mon frigo</h1>
            <p className="fridge__text">Sélectionner mes ingrédients</p>
            <NavigationGroupsList {... foodGroupsList} link />
            {noGroupReturned && (
                <p>Erreur de connexion à la base de données</p>
            )}
            <form className="fridge__submit-container" onSubmit={handleSubmit}>
                <input className="fridge__submit-button" type="submit" value="Chercher des recettes"/>
                <button className="fridge__button" type="submit">
                    <FontAwesomeIcon icon={faSearch} className="fridge__button-icon"/>
                </button>
            </form>
        </div>
    );
};

Fridge.propTypes = {
    loadFoodGroups: PropTypes.func.isRequired,
    noGroupReturned: PropTypes.bool,
    foodGroupsList: PropTypes.arrayOf(
        PropTypes.shape({
            food_group: PropTypes.string.isRequired,
            food_group_id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Fridge;