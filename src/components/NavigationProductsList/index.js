import React from 'react';
import NavigationProductLink from '../../containers/NavigationProductLink';
import PropTypes from 'prop-types';

const NavigationProductsList = ({
    productsList,
    selectedFoodSubgroupId,
    link
}) => {

    console.log(selectedFoodSubgroupId);
    return (
        productsList.filter(product => product.food_subgroup_id === selectedFoodSubgroupId)
            .map(product => (
                <NavigationProductLink
                    key={product.id}
                    name={product.name}
                    id={product.id}
                    link={link}
                    product={product}
                    className="navigation-product__link"
                    /* {... productsList} */
                />
            )) 
    );          
};

NavigationProductsList.propTypes = {  
    productsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            food_subgroup_id: PropTypes.number.isRequired,
        }).isRequired,
        ).isRequired,
    selectedFoodSubgroupId: PropTypes.string,
};

export default NavigationProductsList;