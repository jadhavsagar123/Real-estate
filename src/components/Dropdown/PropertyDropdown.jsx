import styles from './Dropdown.module.css';
const PropertyDropdown = ({ selectPropertyHandler }) => {
  return (
    <div className={styles.dropdown}>
      <select onChange={selectPropertyHandler}>
        <option value='houses'>Houses</option>
        <option value='flat'>Flat</option>
      </select>
    </div>
  );
};

export default PropertyDropdown;
