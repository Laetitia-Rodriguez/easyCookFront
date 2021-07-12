import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NavigationSubgroupsList from '../../containers/NavigationSubgroupsList';

const NavigationGroup = ({
    link,
    title,
    loadFoodSubgroups,
    manageFoodGroup,
    food_group_id,
    foodSubgroupsReturned,
    selectedFoodGroupId,
    foodGroupsList,
    foodSubgroupsList,
}) => {

    useEffect (() => {
        loadFoodSubgroups();
    }, []);

    const handleClick = (event) => {
        selectFoodGroup(food_group_id);
    } 
    
    console.log(food_group_id);

    const selectFoodGroup = (food_group_id) => {
        manageFoodGroup(food_group_id);
    };

    return (
        <div className="navigation_link">
            <a 
                href={link}
                onClick={(event) => {
                    handleClick(food_group_id);
                }}
            >
                {title}
            </a>
            <div>
            {foodSubgroupsReturned && (food_group_id === selectedFoodGroupId) &&
                (<NavigationSubgroupsList group {... foodGroupsList} {... foodSubgroupsList} />)
            }
            </div>
        </div>
    )
}

NavigationGroup.propTypes = {
    title: PropTypes.string,
    loadFoodSubgroups: PropTypes.func.isRequired,
    food_group_id: PropTypes.number,
    foodSubgroupsReturned: PropTypes.bool,
    selectedFoodGroupId: PropTypes.number,
    foodSubgroupsList: PropTypes.arrayOf(
    PropTypes.shape({
        food_subgroup: PropTypes.string.isRequired,
        food_group_id: PropTypes.string.isRequired,
        food_subgroup_id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
};
 
export default NavigationGroup;