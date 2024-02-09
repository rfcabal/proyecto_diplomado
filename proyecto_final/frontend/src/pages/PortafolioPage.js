import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/pages/Portafolio.css';

const PortafolioPage = (props) => {

    const [portafolios, setPortafolios] = useState([]);

    useEffect(() => {
        const cargarPortafolio = async () => {
            const responsePortafolios = await axios.get('http://localhost:3001/api/entradas?tipo=portafolio');

            setPortafolios(responsePortafolios.data);
        }

        cargarPortafolio();

    }, []);


    return (
        <main>
            <section className="portafolio">
                {
                    portafolios.map( portafolio => 
                        <div className="item" key={portafolio.id}>
                            <div className="img-portfolio"></div>
                            <div className="text-portfolio">
                                {portafolio.texto}
                            </div>
                            <a href={ `portafolio/${portafolio.id}` }>
                                <div className="button-portfolio">
                                    Ver
                                </div>
                            </a>
                        </div>
                    )
                }
            </section>
        </main>
    );
}

export default PortafolioPage;