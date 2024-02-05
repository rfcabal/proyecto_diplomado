import React from "react";
import '../styles/pages/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons'

const HomePage = (props) => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faReddit} />
                    </li>
                </ul>
            </nav>
            <div className="main-content">
                <section>
                    <h2>Introduccion</h2>
                </section>
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin nisl eu
                        accumsan. Etiam ornare augue vitae libero imperdiet laoreet. Phasellus nunc risus, fringilla non
                        auctor eu, congue id mauris. Cras imperdiet porta lacinia. In ut enim sapien. Ut consequat lacus
                        elementum, volutpat neque eget, porttitor ex. Quisque semper lectus a sagittis iaculis. Proin
                        feugiat eget mi quis pulvinar. In hac habitasse platea dictumst. Nam quam lorem, bibendum sit
                        amet vulputate quis, volutpat eu purus.
                    </p>
                </section>
                <section>
                    <h2>Experiencia</h2>
                </section>
                <section>
                    <div className="titulo-experiencia">
                        <h4>Lorem ipsum dolor sit amet (2022-2023)</h4>
                    </div>
                    <div className="resumen-experiencia">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin nisl eu
                        accumsan. Etiam ornare augue vitae libero imperdiet laoreet. Phasellus nunc risus, fringilla non
                        auctor eu, congue id mauris. Cras imperdiet porta lacinia. In ut enim sapien. Ut consequat lacus
                        elementum, volutpat neque eget, porttitor ex.
                    </div>
                    <div className="titulo-experiencia">
                        <h4>Lorem ipsum dolor sit amet (2022-2023)</h4>
                    </div>
                    <div className="resumen-experiencia">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin nisl eu
                        accumsan. Etiam ornare augue vitae libero imperdiet laoreet. Phasellus nunc risus, fringilla non
                        auctor eu, congue id mauris. Cras imperdiet porta lacinia. In ut enim sapien. Ut consequat lacus
                        elementum, volutpat neque eget, porttitor ex.
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HomePage;