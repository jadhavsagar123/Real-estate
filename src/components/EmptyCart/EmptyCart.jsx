import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <h2 style={{ alignItems: 'center' }}>
        There is nothing in the favorite. Please add items to the favorite
      </h2>
      <h2 style={{ alignItems: 'center' }}>
        Click on home button to go home page
        
              <NavLink to="/">
                <button style={{
                backgroundColor: "#6777D3",
                borderColor: "#6777D3",
                color: "white",
                height: "40px",
                width: "90px",
                borderRadius: "5px",
                fontSize: "18px",
              }}>
              Home
              </button>
            </NavLink>
      </h2>
    </>
  );
};
export default EmptyCart;
