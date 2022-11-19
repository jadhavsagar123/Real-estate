const SearchDropdown = ({ onSearchChangeHandler }) => {
  return (
    <>
      <select onChange={onSearchChangeHandler}>
        <option value='furnished'>Furnished</option>
        <option value='semi-furnished'>Semi-Furnished</option>
        <option value='non-furnished'>Non-Furnished</option>
      </select>
    </>
  );
};
export default SearchDropdown;
