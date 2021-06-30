// Yarn import
import { Switch, Route } from 'react-router-dom';

// Local import
import Homepage from '../../components/Homepage';
import LegalMentions from '../../components/LegalMentions';
import './main.css';

const Main = () => (
    <main className="main">
        <Switch>
            <Route path="/mentions-légales" exact>
                <LegalMentions />
            </Route>
            <Route path="/" exact>
                <Homepage />
            </Route>
        </Switch>
    </main>
)

export default Main;