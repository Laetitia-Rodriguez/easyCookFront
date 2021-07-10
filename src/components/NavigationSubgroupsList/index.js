import React, { useEffect } from 'react';
import NavigationSubgroupLink from '../../containers/NavigationSubgroupLink';
import PropTypes from 'prop-types';


const NavigationSubgroupsList = ({
    foodSubgroupsList,
    selectedFoodGroupId,
    loadFoodSubgroups,
}) => {

    useEffect (() => {
        loadFoodSubgroups();
    }, []);

    console.log(foodSubgroupsList);
  

        return (
            foodSubgroupsList.filter(subgroup => subgroup.food_group_id === selectedFoodGroupId)
                .map(subgroup => (
                    <NavigationSubgroupLink
                        key={subgroup.food_group_id}
                        name={subgroup.food_subgroup}
                         />
                ))
        )                
}

NavigationSubgroupsList.propTypes = {
    loadFoodSubgroups: PropTypes.func.isRequired,
    foodSubgroupsList: PropTypes.arrayOf(
        PropTypes.shape({
            food_subgroup: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    selectedFoodGroupId: PropTypes.string,
    
};


export default NavigationSubgroupsList;