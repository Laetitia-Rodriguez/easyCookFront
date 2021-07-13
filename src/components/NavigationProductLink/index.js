import React from 'react';
import PropTypes from 'prop-types';

// Local import
import './navigationProductLink.css';

const NavigationProductLink = ({
    link,
    name,
    product,
    noProductReturned,
}) => {
    console.log(product);

    return (
        <div className="navigation-product__container">
            <>
                <a
                    className="navigation-link__product"
                    href={link}
                    id={name}
                >
                    {name}

                </a>
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