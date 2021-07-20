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
    favoritesListId, 
    manageSelectedFavorite,
    productsList
}) => {
    console.log(productsList);

    const handleClickOnFavorite = (event) => {
        manageSelectedFavorite(product.id);
    } 

    let productFavoriteIcon = 'product__favorite-icon';
    
    if (favoritesListId.includes(product.id)) {
        productFavoriteIcon += ' product__favorite-icon--on';
    } 

    return (
        <div 
            className="navigation-product__container"
            onClick={(event) => {
                handleClickOnFavorite(product.id);
            }}
        >
            <>
                <img
                    src={ 'http://127.0.0.1/easyCookAPI/src/utils/images/products/' + product.pictureFileName  }
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