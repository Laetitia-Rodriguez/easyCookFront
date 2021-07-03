import React from 'react';
import PropTypes from 'prop-types';

// Yarn import
import { Switch, Route, Redirect } from 'react-router-dom';

// Local import
import Fridge from '../../components/Fridge';
import Results from '../../containers/Results';
import Recipe from '../../components/Recipe';
import LegalMentions from '../../components/LegalMentions';
import Contact from '../../components/Contact';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import Homepage from '../../containers/Homepage';

import './main.css';

const Main = ({resultsList, redirect}) => (
    <main className="main">
        {redirect && (
          <Redirect to="/résultats" exact />
        )}
        <Switch>
            <Route path="/mon-frigo" exact>
                <Fridge />
            </Route>
            <Route path="/résultats" exact>
                <Results {... resultsList} />
            </Route>
            <Route path="/recette/:id" exact>
                <Recipe />
            </Route>
            <Route path="/mentions-légales" exact>
                <LegalMentions />
            </Route>
            <Route path="/contact" exact>
                <Contact />
            </Route>
            <Route path="/connexion" exact>
                <SignIn />
            </Route>
            <Route path="/inscription" exact>
                <SignUp />
            </Route>
            <Route path="/" exact>
                <Homepage />
            </Route>
        </Switch>
    </main>
)

Main.propTypes = {
    redirect: PropTypes.bool.isRequired,
    resultsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
};

export default Main;