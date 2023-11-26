import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet ligula ligula. In maximus, justo vitae maximus tempor, turpis ante lacinia mi, ac placerat ante felis quis lacus. Donec pulvinar est erat, in vulputate metus suscipit in.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet ligula ligula. In maximus, justo vitae maximus tempor, turpis ante lacinia mi, ac placerat ante felis quis lacus. Donec pulvinar est erat, in vulputate metus suscipit in.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                    </div>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet ligula ligula. In maximus, justo vitae maximus tempor, turpis ante lacinia mi, ac placerat ante felis quis lacus. Donec pulvinar est erat, in vulputate metus suscipit in.</p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;