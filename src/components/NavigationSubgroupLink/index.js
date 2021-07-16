import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Local import
import './navigationSubgroupLink.css';
import NavigationProductsList from '../../containers/NavigationProductsList';

const NavigationSubgroupLink= ({
    link,
    name,
    food_subgroup_id,
    clickOnASubgroup,
    manageFoodSubgroup,
    subgroupIsOpen,
    productsReturned,
    foodSubgroupsList,
    selectedFoodSubgroupId,
    productsList,
    loadProducts
}) => {

    useEffect (() => {
        loadProducts();
    }, []);

    console.log(food_subgroup_id);

    const handleClick = (event) => {
        selectFoodSubgroup(food_subgroup_id);
        clickOnASubgroup();
    } 

    const selectFoodSubgroup = (food_subgroup_id) => {
        manageFoodSubgroup(food_subgroup_id);
    };

    return (
        <>
            <a 
                className="navigation-link__subgroup" 
                href={link}
                id={name}
                onClick={(event) => {
                    handleClick(food_subgroup_id);
                }}
            >
                {name}
            </a>
            <div className="navigation-products__container">
                {productsReturned && subgroupIsOpen && (food_subgroup_id === selectedFoodSubgroupId) &&
                    (<NavigationProductsList subgroup {... foodSubgroupsList} {... productsList} />
                    )
                }
            </div>
       </>
    );
};

NavigationSubgroupLink.propTypes = {
    loadProducts: PropTypes.func.isRequired,
    food_subgroup_id: PropTypes.number,
    productsReturned: PropTypes.bool,
    selectedFoodSubgroupId: PropTypes.number,
    foodSubgroupsList: PropTypes.arrayOf(
    PropTypes.shape({
        food_subgroup: PropTypes.string.isRequired,
        food_group_id: PropTypes.string.isRequired,
        food_subgroup_id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
    subgroupIsOpen: PropTypes.bool,
    clickOnASubgroup: PropTypes.func,
};

export default NavigationSubgroupLink;