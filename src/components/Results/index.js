// Local import
import './results.css';
import Counter from '../../components/Counter';
import Recipe from '../../components/Recipe';

const Results = () => (
    <div className="results">
        <Counter />
        <ul>
            <li><Recipe /></li>
            <li><Recipe /></li>
        </ul>
        <a href="/">Accueil</a>
    </div>
)

export default Results;