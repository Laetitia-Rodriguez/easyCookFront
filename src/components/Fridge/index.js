import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

// Local import
import './fridge.css';

const Fridge = ({
    loadFoodGroups,
    groupsList,
    noGroupReturned
}) => {
    // Request to the API is automatically launched after the first display,
    // to get the food_groups
    useEffect (() => {
        loadFoodGroups();
    }, []);

    return (
        <div className="fridge">
            <h2>Dans mon frigo <br/> (et mon placard)<br/>j'ai:</h2>
            <ul className="fridge__groups">
               {groupsList.map((group) => ( 
                <li 
                    key={group.food_group}
                    className="fridge__groups-button"
                >
                    {group.food_group}
                </li>
               ))}
            </ul>
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
        )
}

Fridge.propTypes = {
    loadFoodGroups: PropTypes.func.isRequired,
    noGroupReturned: PropTypes.bool,
    groupsList: PropTypes.array.isRequired,
};

export default Fridge;


/* à garder pour plus tard
food_group_id: PropTypes.number.isRequired,
food_subgroup : PropTypes.string.isRequired,
food_subgroup_id: PropTypes.number.isRequired,
*/