// Local import
import './homepage.css';

const Homepage = () => (
    <div className="homepage">
       <p>Je veux trouver des recettes avec ...</p>
       <input type="text" className="homepage__input" minlength="2" maxlength="50" placeholder='un ingrédient | Ex: "tomate"'></input>
       <p>OU</p>
       <a href='/mentions-légales'>ce que j'ai dans mon frigo </a>
    </div>
)

export default Homepage;