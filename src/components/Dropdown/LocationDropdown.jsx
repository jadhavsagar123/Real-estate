const LocationDropdown = ({ selectLocationHandler }) => {
  return (
    <>
      <select onChange={selectLocationHandler} defaultValue={'pune'}>
        <option value='pune'>Pune</option>
        <option value='mumbai'>Mumbai</option>
      </select>
    </>
  );
};

export default LocationDropdown;
