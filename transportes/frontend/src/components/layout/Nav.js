import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink>
                        <NavLink to='/nosotros' className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink>
                        <NavLink to='/novedades' className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink>
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;