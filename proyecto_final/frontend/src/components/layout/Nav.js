import React from "react";
import '../../styles/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/portafolio'>Portafolio</NavLink></li>
                <li><NavLink to='/contacto'>Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;