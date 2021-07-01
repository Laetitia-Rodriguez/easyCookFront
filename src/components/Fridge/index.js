// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

// Local import
import './fridge.css';

const Fridge = () => (
    <div className="fridge">
        <h2>Dans mon frigo (et mon placard) j'ai:</h2>
        <ul>
            <li>Groupes</li>
            <li>Sous-groupes</li>
        </ul>
        <div className="fridge__submit-container">
            <input type="submit" value="Chercher des recettes"/>
            <a href="/résultats">
                <FontAwesomeIcon icon={faSearch} className="homepage__a"/>
            </a> 
        </div>
    </div>
)

export default Fridge;