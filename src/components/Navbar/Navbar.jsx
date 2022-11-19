import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.estatery}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: 'red',
                    background: 'rgb(40, 77, 179)',
                    textDecoration: 'none',
                  }
                : {
                    color: 'white',
                    background: 'rgb(40, 77, 179)',
                    textDecoration: 'none',
                  }
            }
            to='/'
          >
            Estatery
          </NavLink>
        </div>
        <div className={styles.favorite}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: 'red',
                    background: 'rgb(40, 77, 179)',
                    textDecoration: 'none',
                  }
                : {
                    color: 'white',
                    background: 'rgb(40, 77, 179)',
                    textDecoration: 'none',
                  }
            }
            to='/favorites'
          >
            Favorites
          </NavLink>
        </div>
        <div className={styles.login}>
          <button>Login</button>
        </div>
        <div className={styles.signup}>
          <button>SignUp</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
