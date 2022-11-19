const Input = ({ type, inputChangeHandler, value, placeholder }) => {
  return (
    <>
      <input
        type={type}
        onChange={inputChangeHandler}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
