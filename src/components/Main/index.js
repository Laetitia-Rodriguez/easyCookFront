import React from 'react';

// Yarn import
import { Switch, Route } from 'react-router-dom';

// Local import
import Fridge from '../../components/Fridge';
import Results from '../../components/Results';
import Recipe from '../../components/Recipe';
import LegalMentions from '../../components/LegalMentions';
import Contact from '../../components/Contact';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import Homepage from '../../containers/Homepage';

import './main.css';

const Main = () => (
    <main className="main">
        <Switch>
            <Route path="/mon-frigo" exact>
                <Fridge />
            </Route>
            <Route path="/résultats" exact>
                <Results />
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

export default Main;