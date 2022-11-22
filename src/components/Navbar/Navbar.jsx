import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
     <div className={styles.start}>
        <div className={styles.estatery}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "red",
                    background: "rgb(40, 77, 179)",
                    textDecoration: "none",
                  }
                : {
                    color: "white",
                    background: "rgb(40, 77, 179)",
                    textDecoration: "none",
                  }
            }
            to="/"
          >
            Estatery
          </NavLink>
        </div>
        <div className={styles.favorite}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "red",
                    background: "rgb(40, 77, 179)",
                    textDecoration: "none",
                  }
                : {
                    color: "white",
                    background: "rgb(40, 77, 179)",
                    textDecoration: "none",
                  }
            }
            to="/favorites"
          >
            Favorites
          </NavLink>
          </div>
      </div>
      <div className={styles.center}>
        <div className={styles.buy}>
          <button>Buy</button>
        </div>
        <div className={styles.rent}>
          <button>Rent</button>
        </div>
        <div className={styles.sell}>
          <button>Sell</button>
        </div>
        <div className={styles.manageproperty}>
          <select defaultValue={"Manage Property"}>
            <option>Manage Property</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className={styles.resources}>
          <select defaultValue={"Resources"}>
            <option>Resources</option>
            <option>Mumbai</option>
          </select>
          </div>
      </div>
      <div className={styles.end}>
      <div className={styles.login}>
        <button style={{
              backgroundColor: '#6777D3',
              borderColor: '#6777D3',
              color: 'white',
              height: '50px',
              width: '110px',
              borderRadius: '5px',
              fontSize: '18px',
            }}>Login</button>
      </div>
      <div className={styles.signup}>
        <button style={{
              backgroundColor: 'red',
              borderColor: '#6777D3',
              color: 'white',
              height: '50px',
              width: '110px',
              borderRadius: '5px',
              fontSize: '18px',
            }}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
