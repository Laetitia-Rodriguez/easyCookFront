import React from 'react';
import NavigationProductLink from '../../containers/NavigationProductLink';
import PropTypes from 'prop-types';

// Local import
import './navigationProductsList.css';

const NavigationProductsList = ({
    productsList,
    selectedFoodSubgroupId,
    link,
}) => {

    console.log(selectedFoodSubgroupId);
    return (
        productsList.filter(product => product.foodSubgroupId == selectedFoodSubgroupId)
            .map(product => (
                <NavigationProductLink
                    key={product.id}
                    name={product.name}
                    id={product.id}
                    link={link}
                    product={product}
                    className="navigationProduct__link"
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
        }).isRequired,
        ).isRequired,
    selectedFoodSubgroupId: PropTypes.string,
};

export default NavigationProductsList;