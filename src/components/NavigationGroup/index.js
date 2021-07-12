import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NavigationSubgroupsList from '../../containers/NavigationSubgroupsList';
import { noSubgroupReturned } from '../../actions/fridge';

const NavigationGroup = ({
    food_group_id,
    title,
    manageFoodGroup,
    group,
    link,
    loadFoodSubgroups,
    foodSubgroupsReturned,
    foodSubgroupsList,
    foodGroupsList,
    selectedFoodGroupId
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
    food_group_id: PropTypes.number,
    title: PropTypes.string,
    selectedFoodGroupId: PropTypes.number,
    loadFoodSubgroups: PropTypes.func.isRequired,
    foodSubgroupsList: PropTypes.arrayOf(
    PropTypes.shape({
        food_subgroup: PropTypes.string.isRequired,
        food_group_id: PropTypes.number.isRequired,
        food_subgroup_id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
    foodSubgroupsReturned: PropTypes.bool,
};

export default NavigationGroup;