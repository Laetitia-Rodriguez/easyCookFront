import NavigationGroup from '../../containers/NavigationGroup';
import PropTypes from 'prop-types';

const NavigationGroupsList = ({
    foodGroupsList,
    selectFoodGroup,
}) => {

    console.log(foodGroupsList);

    return (
        <div className="navigation_group">
            {foodGroupsList.map((group) => (
            <NavigationGroup 
                key={group.food_group_id}
                title={group.food_group}
                selectFoodGroup={selectFoodGroup}
                {... group}
            />
            ))
            }
        </div>
    )
}

NavigationGroupsList.propTypes = {
    foodGroupsList: PropTypes.arrayOf(
        PropTypes.shape({
            food_group: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      selectFoodGroup: PropTypes.func,
};

export default NavigationGroupsList;