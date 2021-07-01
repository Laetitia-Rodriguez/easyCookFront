// Local import
import './fridge.css';

const Fridge = () => (
    <div className="fridge">
        <h2>Dans mon frigo (et mon placard) j'ai:</h2>
        <ul>
            <li>Groupes</li>
            <li>Sous-groupes</li>
        </ul>
        <input type="submit" value="Chercher des recettes"/>
    </div>
)

export default Fridge;