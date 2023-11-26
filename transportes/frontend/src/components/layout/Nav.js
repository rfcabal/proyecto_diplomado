import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/nosotros'>Nosotros</Link>
                        <Link to='/novedades'>Novedades</Link>
                        <Link to='/contacto'>Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;