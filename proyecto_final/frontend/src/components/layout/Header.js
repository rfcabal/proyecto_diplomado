import React from "react";
import '../../styles/layout/Header.css';
import Nav from "./Nav";

const Header = (props) => {
    return (
        <header>
            <section>
            </section>
            <section>
                <h1>Ricardo Flores Cabal</h1>
                <h4>Desarrollador Fullstack</h4>
                <Nav />
            </section>
        </header>
    );
}

export default Header;