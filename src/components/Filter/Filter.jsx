import { useState } from 'react';
import PriceDropdown from '../Dropdown/PriceDropdown';
import PropertyDropdown from '../Dropdown/PropertyDropdown';
import styles from './Filter.module.css';
import data from '../../Dummy data/data';
import Input from '../Input/Input';
import PropertyDisplay from '../PropertyDisplay/PropertyDisplay';
import LocationDropdown from '../Dropdown/LocationDropdown';
import NoData from '../NoData/NoData';
import SearchDropdown from '../Dropdown/SearchDropdown';

const Filter = () => {
  const [location, setLocation] = useState('pune');
  const [date, setDate] = useState();
  const [type, setType] = useState('houses');
  const [price, setPrice] = useState('');
  const [filterData, setFilterData] = useState(data);
  const [search, setSearch] = useState('furnished');

  // console.log(type);
  // console.log(date);
  // console.log(price);
  // console.log(location);
  // console.log(search);

  const selectPropertyHandler = (e) => {
    setType(e.target.value);
  };

  const selcetDateHandler = (e) => {
    const value = e.target.value;
    setDate(new Date(value));
  };

  const selectLocationHandler = (e) => {
    setLocation(e.target.value);
  };

  const selectPriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const filterBtnHandler = () => {
    const priceFrom = price.split('-')[0];
    const priceTo = price.split('-')[1];
    const filterData = data.filter((el) => {
      return (
        el.price >= priceFrom &&
        el.price <= priceTo &&
        el.location === location.toLowerCase() &&
        el.propertyType === type &&
        el.availablefrom < date &&
        el.furnishtype === search
      );
    });
    setFilterData(filterData);
  };

  return (
    <div>
      <div className={styles.search}>
        <SearchDropdown onSearchChangeHandler={onSearchChangeHandler} />
      </div>
      <div className={styles.filter}>
        <div className={styles.location}>
          Location
          <div style={{ marginTop: '10px' }}>
            <LocationDropdown selectLocationHandler={selectLocationHandler} />
          </div>
        </div>

        <div className={styles.date}>
          Select Move-in Date
          <div style={{ marginTop: '10px' }}>
            <Input type='date' inputChangeHandler={selcetDateHandler} />
          </div>
        </div>

        <div className={styles.price}>
          Price
          <div style={{ marginTop: '10px' }}>
            <PriceDropdown selectPriceHandler={selectPriceHandler} />
          </div>
        </div>

        <div className={styles.type}>
          Property Type
          <div style={{ marginTop: '10px' }}>
            <PropertyDropdown selectPropertyHandler={selectPropertyHandler} />
          </div>
        </div>

        <div className={styles.button}>
          <button
            style={{
              backgroundColor: '#6777D3',
              borderColor: '#6777D3',
              color: 'white',
              height: '50px',
              width: '110px',
              borderRadius: '5px',
              fontSize: '18px',
            }}
            onClick={filterBtnHandler}
          >
            Search
          </button>
        </div>
      </div>
      <div>{filterData && <PropertyDisplay propData={filterData} />}</div>
      <div>{filterData.length === 0 && <NoData />}</div>
    </div>
  );
};

export default Filter;
