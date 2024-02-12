import React from "react";
import '../../styles/layout/Header.css';
import Nav from "./Nav";

const Header = (props) => {

    return (
        <header>
            <section>
                <img src={props.profile} alt="profile"></img>
            </section>
            <section>
                <h1>{props.nombre}</h1>
                <h4>{props.posicion}</h4>
                <Nav />
            </section>
        </header>
    );
}

export default Header;