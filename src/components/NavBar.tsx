import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/projects">
                    <li>Projects</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About-me</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default NavBar;
