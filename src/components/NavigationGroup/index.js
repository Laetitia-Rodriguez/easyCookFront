import PropTypes from 'prop-types';

const NavigationGroup = ({
    food_group_id,
    title,
    manageFoodGroup,
    selectedFoodGroupId,
    group
}) => {

    const handleClick = (event) => {
        selectFoodGroup(food_group_id);
    } 
    
    console.log(selectedFoodGroupId);

    const selectFoodGroup = (food_group_id) => {
        manageFoodGroup(food_group_id);
    };

    return (
        <div className="navigation_link">
            <a 
                href={food_group_id}
                onClick={(event) => {
                    handleClick(food_group_id);
                }}
            >
                {title}
            </a>
        </div>
    )
}

NavigationGroup.propTypes = {
    food_group: PropTypes.string,
    title: PropTypes.string,
    selectedFoodGroupId: PropTypes.string,
};

export default NavigationGroup;