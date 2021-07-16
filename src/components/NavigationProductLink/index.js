import React from 'react';
import PropTypes from 'prop-types';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Local import
import './navigationProductLink.css';

const NavigationProductLink = ({
    link,
    name,
    product,
    noProductReturned,
    selectedFavoriteId, 
    manageSelectedFavorite,
}) => {
    console.log(product);

    /* const handleClick = (event) => {
        manageSelectedFavorite(product.id);
    } */

    let productFavoriteIcon = 'product__favorite-icon';
    if (product.id === selectedFavoriteId) {
        productFavoriteIcon += ' product__favorite-icon--on';
    } 

    return (
        <div className="navigation-product__container">
            <>
                <img
                    src={ 'http://127.0.0.1/easyCookAPI/src/utils/images/products/' + product.picture_file_name  }
                    className="product__image" 
                    href={link}
                    id={name}
                    alt={name}
                /> 
                <div className="product-title__container">
                    <a
                        className="navigation-link__product"
                        id={product.name}
                        href={link}
                    >
                        {product.name}
                    </a>
                    <div className="product__favorite-container">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            className={productFavoriteIcon}
                            /* onClick={(event) => {
                                handleClick(product.id);
                            }} */
                        />
                    </div>
                </div>
            </>
            <div className="navigation__noProduct">
                {noProductReturned &&
                    (<div>Erreur de connexion à la base de données</div>)
                }
            </div>
        </div>
    );          
};

NavigationProductLink.propTypes = {
    noProductReturned: PropTypes.bool,
    selectedFavoriteId: PropTypes.number,
    manageSelectedFavorite: PropTypes.func,
};

export default NavigationProductLink;