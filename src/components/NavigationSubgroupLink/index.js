
const NavigationSubgroupLink= ({
  name,
  subgroup
}) => {
  console.log(subgroup);
  return (
    <div className="navigation_subgroup" id={name}>
        {name}
    </div>
  )
}

export default NavigationSubgroupLink;