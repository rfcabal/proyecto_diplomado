import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/pages/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons'

const HomePage = (props) => {

    const [experiencias, setExperiencias] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [certificaciones, setCertificaciones] = useState([]);

    useEffect(() => {
        const cargarHome = async () => {
            const responseExperiencias = await axios.get('http://localhost:3001/api/entradas?tipo=experiencia');
            const responseCursos = await axios.get('http://localhost:3001/api/entradas?tipo=curso');
            const responseCertificaciones = await axios.get('http://localhost:3001/api/entradas?tipo=certificación');

            setExperiencias(responseExperiencias.data);
            setCursos(responseCursos.data);
            setCertificaciones(responseCertificaciones.data);
        }

        cargarHome();

    }, [])

    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <a href={props.linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        <a href={props.github}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        <a href={props.reddit}><FontAwesomeIcon icon={faReddit} size="2x" /></a>
                    </li>
                    <li>{props.telefono}</li>
                    <li>{props.correo}</li>
                </ul>
            </nav>
            <div className="main-content">
                <section>
                    <h2>Introduccion</h2>
                </section>
                <section>
                    <p>
                        {props.introduccion}
                    </p>
                </section>
                <section>
                    <h2>Experiencia</h2>
                </section>
                <section>
                    {
                        experiencias.map(experiencia =>
                            <>
                                <div className="titulo-experiencia">
                                    <h4>{experiencia.titulo} ({experiencia.tiempo})</h4>
                                </div>
                                <div className="resumen-experiencia">
                                    {experiencia.texto}.
                                </div>
                            </>
                        )
                    }
                </section>
                <section>
                    <h2>Cursos</h2>
                </section>
                <section>
                    {
                        cursos.map(curso =>
                            <>
                                <div className="titulo-experiencia">
                                    <h4>{curso.titulo} ({curso.tiempo})</h4>
                                </div>
                                <div className="resumen-experiencia">
                                    {curso.texto}.
                                </div>
                            </>
                        )
                    }
                </section>
                <section>
                    <h2>Certificaciones</h2>
                </section>
                <section>
                    {
                        certificaciones.map(certificacion =>
                            <>
                                <div className="titulo-experiencia">
                                    <h4>{certificacion.titulo} ({certificacion.tiempo})</h4>
                                </div>
                                <div className="resumen-experiencia">
                                    {certificacion.texto}.
                                </div>
                            </>
                        )
                    }
                </section>
            </div>
        </main>
    );
}

export default HomePage;