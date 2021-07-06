import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

// Local import
import './fridge.css';

const Fridge = ({
    loadFoodGroups,
    foodGroupsList,
    noGroupReturned,
    manageOnClick,
    foodSubgroupsList,
    noSubgroupReturned,
    foodSubgroupsReturned,
}) => {
    // Request to the API is automatically launched after the first display,
    // to get the food_groups
    useEffect (() => {
        loadFoodGroups();
    }, []);

    function handleOnClick(id) {
        manageOnClick(id);
    };

    console.log(foodGroupsList);
    console.log(foodSubgroupsList);
    console.log(foodSubgroupsReturned);

    return (
        <div className="fridge">
            <h2>Dans mon frigo <br/> (et mon placard)<br/>j'ai:</h2>
            <ul className="fridge__groups">
                {foodGroupsList.map((group) => ( 
                    <>
                        <li 
                            key={group.food_group}
                            className="fridge__groups-button"
                            onClick={() => {
                                handleOnClick(group.food_group);
                            }}
                        >
                            {group.food_group}
                        </li>
                    </>
                ))}
                {foodSubgroupsReturned &&(
                            <ul className="fridge__subgroups">
                                {foodSubgroupsList.map((subgroup) => ( 
                                    <li 
                                        key={subgroup.food_subgroup}
                                        className="fridge__subgroups-button"
                                    >
                                        {subgroup.food_subgroup}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {noSubgroupReturned &&(
                            <p>Erreur de connexion à la base de données</p>
                        )}
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
    foodGroupsList: PropTypes.arrayOf(
        PropTypes.shape({
          food_group: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    manageOnClick: PropTypes.func.isRequired,
    noSubgroupReturned: PropTypes.bool,
    foodSubgroupsList: PropTypes.arrayOf(
        PropTypes.shape({
          food_subgroup: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    foodSubgroupsReturned: PropTypes.bool,
};

export default Fridge;


/* à garder pour plus tard
food_group_id: PropTypes.number.isRequired,
food_subgroup : PropTypes.string.isRequired,
food_subgroup_id: PropTypes.number.isRequired,
*/