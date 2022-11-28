import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "rgb(232, 226, 226)" }}
      className="navigation"
    >
      <NavLink to="/" className="brand-name">
        <i className="fa fa-home" aria-hidden="true"></i>
        Estatery
      </NavLink>
      <NavLink to="/favorites" className="brand-name">
        <i class="fa-solid fa-heart"></i>
        Favorites
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="blue"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className="activeCss">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#7600dc" : 'black',
                background: isActive ? "white" : "inherit",
              })}
             
            >
              Rent
            </NavLink>
          </li>
          <li>
            <a href="/#">Buy</a>
          </li>
          <li>
            <a href="/#">Sell</a>
          </li>
          <li>
            <a href="/#">Manage-property</a>
          </li>
          <li>
            <a href="/#">Resources</a>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "#6777D3",
                borderColor: "#6777D3",
                color: "white",
                height: "40px",
                width: "90px",
                borderRadius: "5px",
                fontSize: "18px",
              }}
            >
              login
            </button>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "red",
                borderColor: "red",
                color: "white",
                height: "40px",
                width: "90px",
                borderRadius: "5px",
                fontSize: "18px",
              }}
            >
              Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
