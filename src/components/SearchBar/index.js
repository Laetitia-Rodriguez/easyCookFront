import React from 'react';
import PropTypes from 'prop-types';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Import local
import './searchbar.css';

const SearchBar = ({
    setSearchInput,
    search,
    manageSubmit,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        manageSubmit();
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
        <input 
            className="searchbar__input" 
            type="search" 
            placeholder=' un ingrédient | Ex: "tomate"'
            minLength="2" 
            maxLength="50" 
            value={search}
            onChange={(event) => {
                setSearchInput(event.target.value, 'search');
            }}
        >
        </input>
        {/*
        <a href="/résultats">
            <FontAwesomeIcon icon={faSearch} className="searchbar__a"/>
        </a> */}
    </form>
    );
}
SearchBar.propTypes = {
    setSearchInput: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    manageSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
