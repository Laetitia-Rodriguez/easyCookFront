import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// Local import
import './recipe.css';

const Recipe = ({resultsList}) => {
  // useParams get the params (her: id) in the url
  const { id } = useParams();
  // eslint-disable-next-line eqeqeq
  const recipe = resultsList.find((recipe) => recipe.id == id);
  console.log(resultsList);
  console.log(recipe);

  return (
      <div className="recipe">
          <h2 className="recipe__name">{recipe.name}</h2>
          {/*  TODO URI */}
          <img src={ 'http://127.0.0.1/easyCookAPI/src/utils/images/recipes/' + recipe.pictureFileName }  className="recipe__image" alt={recipe.name}/>
          <p className="recipe__title">Ingrédients :</p>
          <p className="recipe__ingredients" >{recipe.ingredientsList}</p>
          <p className="recipe__title">Recette</p>
          <p className="recipe__steps">{recipe.steps}</p>
          <a className="recipe__return-button" href="/">Accueil</a>
      </div>
  );
};

Recipe.propTypes = {
    resultsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        // picture_file_name: PropTypes.string.isRequired,
        // ingredients_list: PropTypes.string.isRequired,
        // steps: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

export default Recipe;