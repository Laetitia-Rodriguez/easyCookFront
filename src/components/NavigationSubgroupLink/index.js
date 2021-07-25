import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Local import
import './navigationSubgroupLink.css';
import NavigationProductsList from '../../containers/NavigationProductsList';

const NavigationSubgroupLink= ({
    link,
    name,
    food_subgroup_id,
    manageFoodSubgroup,
    subgroupIsOpen,
    productsReturned,
    selectedFoodSubgroupId,
    productsList,
    loadProducts
}) => {

    useEffect (() => {
        loadProducts();
    }, []);
    
    // console.log(food_subgroup_id);

    const handleClick = (event) => {
        manageFoodSubgroup(food_subgroup_id);
    } 

    return (
       <>
            <a 
                className="navigation-link__subgroup" 
                href={link}
                id={food_subgroup_id}
                onClick={(event) => {
                    handleClick(food_subgroup_id);
                }}
            >
                {name}
            </a>
            <div className="navigation-products__container">
                {productsReturned && subgroupIsOpen && (food_subgroup_id === selectedFoodSubgroupId) &&
                    (<NavigationProductsList {... productsList} />)
                }
            </div>
        </> 
    );
};

NavigationSubgroupLink.propTypes = {
    loadProducts: PropTypes.func.isRequired,
    foodSubgroupsList: PropTypes.arrayOf(
    PropTypes.shape({
        food_subgroup: PropTypes.string.isRequired,
    }).isRequired,
    ).isRequired,
    subgroupIsOpen: PropTypes.bool,
};

export default NavigationSubgroupLink;