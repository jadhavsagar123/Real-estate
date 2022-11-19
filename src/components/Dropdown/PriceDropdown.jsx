const PriceDropdown = ({ selectPriceHandler }) => {
  return (
    <>
      <select name='' id='' onChange={selectPriceHandler}>
        <option value=''>Select Price</option>
        <option value='50000-60000'>50,000-60,000</option>
        <option value='60000-70000'>60,000-70,000</option>
        <option value='70000-80000'>70,000-80,000</option>
      </select>
    </>
  );
};

export default PriceDropdown;
