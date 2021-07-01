// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


// Local import
import './homepage.css';



const Homepage = () => (
    <div className="homepage">
       <p>Je veux trouver des recettes avec ...</p>
       <div className="homepage__input-container">
            <input type="text" className="homepage__input" minLength="2" maxLength="50" placeholder=' un ingrédient | Ex: "tomate"'></input>
            <a href="/résultats">
                <FontAwesomeIcon icon={faSearch} className="homepage__a"/>
            </a> 
       </div>
       <p>OU</p>
       <a href='/mon-frigo' className="homepage__a">ce que j'ai dans mon frigo </a>
    </div>
)

export default Homepage;