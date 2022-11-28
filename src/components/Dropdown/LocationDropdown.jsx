import styles from './Dropdown.module.css';

const LocationDropdown = ({ selectLocationHandler }) => {
  return (
    <div className={styles.dropdown}>
      <select onChange={selectLocationHandler}  defaultValue={'pune'}>
        <option value='pune'>Pune</option>
        <option value='mumbai'>Mumbai</option>
      </select>
    </div>
  );
};

export default LocationDropdown;
