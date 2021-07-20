import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Local import
import './navigationGroup.css';
import NavigationSubgroupsList from '../../containers/NavigationSubgroupsList';

const NavigationGroup = ({
    link,
    title, 
    id,
    loadFoodSubgroups,
    manageFoodGroup,
    foodSubgroupsReturned,
    selectedFoodGroupId,
    foodSubgroupsList,
    isOpen,
    clickOnAGroup,
}) => {

    useEffect (() => {
        loadFoodSubgroups();
    }, []);

    const handleClick = (event) => {
        selectFoodGroup(id);
        clickOnAGroup();
    } 
    
    // console.log(food_group_id);

    const selectFoodGroup = (id) => {
        manageFoodGroup(id);
    };

    return (
        <div className="navigation-link__container">
            <div 
                className="navigation-link__group"
                href={link}
                onClick={(event) => {
                    handleClick(id);
                }}
            >
                {title}
            </div>
            <div className="navigation-subgroups__container">
            {foodSubgroupsReturned && isOpen && (id === selectedFoodGroupId) &&
                (<NavigationSubgroupsList {... foodSubgroupsList} />)
            }
            </div>
        </div>
    );
};

NavigationGroup.propTypes = {
    loadFoodSubgroups: PropTypes.func.isRequired,
};
 
export default NavigationGroup;