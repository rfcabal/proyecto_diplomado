import React, { useState } from "react";
import '../styles/pages/Contacto.css';
import axios from "axios";

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] =  useState(false);
    const  [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3001/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <main>
            <section className="contacto">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13393.789217463056!2d-60.66335035!3d-32.939197899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698011995530!5m2!1ses-419!2sar"
                        width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" title="map"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form className="form-contacto" onSubmit={handleSubmit}>
                    <h4>Formulario de contacto</h4>
                    <div className="form-grupo">
                        <div>
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-grupo">
                        <div>
                            <label htmlFor="telefono">Telefono: </label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-grupo">
                        <div>
                            <label htmlFor="mensaje">Mensaje: </label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="form-grupo">
                        <p>
                            { sending ? <p>Enviando....</p> : null }
                            {msg ? <p>{msg}</p> : null}
                        </p>
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