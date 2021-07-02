import React from 'react';

// Local import
import './homepage.css';
import SearchBar from '../../containers/SearchBar';

const Homepage = () => (
    <div className="homepage">
       <p>Je veux trouver des recettes avec ...</p>
       <SearchBar />
       <p>OU</p>
       <a href='/mon-frigo' className="homepage__a">ce que j'ai dans mon frigo </a>
    </div>
)

export default Homepage;