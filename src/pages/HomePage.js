import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import canvas from '../assets/canvas2.png';
import whois from '../assets/CacherPseudo.jpg';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <span className="text-span">
                    Internet :
                    <br/> êtes-vous conscients des dangers <br/>que rencontrent vos enfants ?
                </span>
                <div className="row responsive-image">
                    <div className="img-intro">
                        <img src={whois} alt="whois"/>
                    </div>
                    <div className="txt-intro">
                        <h3 className="h7-font">
                            Notre solution :
                        </h3>
                        <h6 className="h6-font">
                            Pour une navigation saine, utilisez Überschutz.
                            <br/>
                            Ce logiciel non bloquant vous préviendra lorsque votre enfant se met en danger sur Internet.
                        </h6>
                        <h8 className="italic-txt">
                            Suicide, drogue, anorexie, harcèlement, contenus pornographiques ... Vous n'imaginez pas à quoi il est confronté.
                        </h8>
                    </div>
                </div>
                <div className="background_1">
                    <h7>
                        En quelques mots :
                    </h7>
                    <img/>
                    <span>
                        Un logiciel
                    </span>
                    <img/>
                    <span>
                        Non bloquant
                    </span>
                    <img/>
                    <span>
                        Non intrusif
                    </span>
                    <h9>
                        Pour protéger votre enfant et discuter avec lui lorsqu'une situation compliquée se présente.
                    </h9>
                </div>
            </div>
        )
    }
}

export default HomePage;