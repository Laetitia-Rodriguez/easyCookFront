// Local import
import './navigationSubgroupLink.css';

const NavigationSubgroupLink= ({
    name,
    subgroup
}) => {
    console.log(subgroup);
    return (
        <div className="navigation-subgroup__container">
            <div className="navigation-link__subgroup" id={name}>
                {name}
            </div>
        </div>
    )
}

export default NavigationSubgroupLink;