const PropertyDropdown = ({ selectPropertyHandler }) => {
  return (
    <>
      <select onChange={selectPropertyHandler}>
        <option value='houses'>Houses</option>
        <option value='flat'>Flat</option>
      </select>
    </>
  );
};

export default PropertyDropdown;
