import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink to="/" className="Nav-link" >Home</NavLink>
    
    <NavLink to="/directors" className="Nav-link" >Directors</NavLink>
    <NavLink to="/actors" className="Nav-link" >Actors</NavLink>
    </nav>
    );
};

export default NavBar;