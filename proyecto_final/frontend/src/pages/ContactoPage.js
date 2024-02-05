import React from "react";
import '../styles/pages/Contacto.css';

const ContactoPage = (props) => {
    return (
        <main>
            <section className="contacto">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13393.789217463056!2d-60.66335035!3d-32.939197899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698011995530!5m2!1ses-419!2sar"
                        width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form className="form-contacto" action="">
                    <h4>Formulario de contacto</h4>
                    <div className="form-grupo">
                        <div>
                            <label>Nombre</label>
                            <input />
                        </div>
                        <div>
                            <label>Email</label>
                            <input />
                        </div>
                    </div>
                    <div className="form-grupo">
                        <textarea></textarea>
                    </div>
                    <div className="form-grupo">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default ContactoPage;