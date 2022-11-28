import styles from './Dropdown.module.css';
const SearchDropdown = ({ onSearchChangeHandler }) => {
  return (
    <div className={styles.dropdown}>
      <select onChange={onSearchChangeHandler}>
        <option value='furnished'>Furnished</option>
        <option value='semi-furnished'>Semi-Furnished</option>
        <option value='non-furnished'>Non-Furnished</option>
      </select>
    </div>
  );
};
export default SearchDropdown;
