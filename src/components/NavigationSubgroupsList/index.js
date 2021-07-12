import React from 'react';
import NavigationSubgroupLink from '../../containers/NavigationSubgroupLink';
import PropTypes from 'prop-types';

const NavigationSubgroupsList = ({
    foodSubgroupsList,
    selectedFoodGroupId,
    link
}) => {

        console.log(selectedFoodGroupId);
        return (
            foodSubgroupsList.filter(subgroup => subgroup.food_group_id === selectedFoodGroupId)
                .map(subgroup => (
                    <NavigationSubgroupLink
                        key={subgroup.food_subgroup_id}
                        name={subgroup.food_subgroup}
                        link={link}
                        subgroup
                    />
                ))
        )  ;          
}

NavigationSubgroupsList.propTypes = {  
    selectedFoodGroupId: PropTypes.string,
    
};


export default NavigationSubgroupsList;