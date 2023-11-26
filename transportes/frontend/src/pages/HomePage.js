import React from "react";
import '../styles/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet ligula ligula. In maximus, justo vitae maximus tempor, turpis ante lacinia mi, ac placerat ante felis quis lacus. Donec pulvinar est erat, in vulputate metus suscipit in.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet ligula ligula. In maximus, justo vitae maximus tempor, turpis ante lacinia mi, ac placerat ante felis quis lacus. Donec pulvinar est erat, in vulputate metus suscipit in.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonio</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;