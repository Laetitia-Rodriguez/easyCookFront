import PropTypes from 'prop-types';

// Local import
import './navigationGroupsList.css';
import NavigationGroup from '../../containers/NavigationGroup';

const NavigationGroupsList = ({
    foodGroupsList,
    selectFoodGroup,
}) => {

    // console.log(foodGroupsList);

    return (
        <div className="navigation-groups__container">
            {foodGroupsList.map((group) => (
                <NavigationGroup 
                    key={group.food_group_id}
                    title={group.food_group}
                    id={group.food_group_id}
                    selectFoodGroup={selectFoodGroup}
                    {... group}
                />
            ))}
        </div>
    );
};

NavigationGroupsList.propTypes = {
    foodGroupsList: PropTypes.arrayOf(
        PropTypes.shape({
            food_group: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    selectFoodGroup: PropTypes.func,
};

export default NavigationGroupsList;