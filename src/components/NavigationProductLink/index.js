import React from 'react';
import PropTypes from 'prop-types';

// Local import
import './navigationProductLink.css';
import Results from '../Results';

const NavigationProductLink = ({
    link,
    name,
    product,
    noProductReturned,
    id,
    productsList,
    selectedFoodSubgroupId,
}) => {
    console.log(product);

    return (
        <div className="navigation-product__container">
            <>
                <>
                    <img
                    src={ 'http://127.0.0.1/easyCookAPI/src/utils/images/products/' + product.picture_file_name  }
                    className="products__image" 
                    href={link}
                    id={name}
                    alt={name}
                    /> 
                    <a
                        className="navigation-link__product"
                        id={product.name}
                        href={link}
                    >
                        {name}
                    </a>
                </>
                <div className="navigation__noProduct">
                    {noProductReturned &&
                        (<div>Erreur de connexion à la base de données</div>)
                    }
                </div>
            </>
        </div>
    )          
}

NavigationProductLink.propTypes = {
    
}

export default NavigationProductLink;