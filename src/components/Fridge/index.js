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
            <h2>Dans mon frigo (et mon placard) j'ai:</h2>
            <ul>
               {groupsList.map((group) => ( 
                <li key={group.food_group}>
                    {group.food_group}
                </li>
               ))}
            </ul>
            {noGroupReturned && (
                <p>Erreur de connexion à la base de données</p>
            )}
            <div className="fridge__submit-container">
                <input type="submit" value="Chercher des recettes"/>
                <a href="/résultats">
                    <FontAwesomeIcon icon={faSearch} className="homepage__a"/>
                </a> 
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