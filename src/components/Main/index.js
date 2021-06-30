// Yarn import
import { Switch, Route } from 'react-router-dom';

// Local import
import Homepage from '../../components/Homepage';
import './main.css';

const Main = () => (
    <main className="main">
        <Switch>
            <Route path="/">
                <Homepage />
            </Route>
        </Switch>
    </main>
)

export default Main;