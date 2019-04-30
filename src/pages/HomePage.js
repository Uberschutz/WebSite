import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import canvas from '../assets/canvas.png';
import whois from '../assets/CacherPseudo.jpg';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <div className="row">
                    <div className="col-sm">
                        <img src={whois} alt="whois"/>
                    </div>
                    <div className="col-sm form-align">
                        <h7 className="h7-font">
                            Notre solution :
                        </h7>
                        <br/>
                        <h9>
                            Pour une navigation saine, utilisez Überschutz.
                            Ce logiciel non bloquant vous préviendra lorsque votre enfant se met en danger sur Internet.
                        </h9>
                        <br/>
                        <h11 className="italic-txt">
                            Suicide, drogue, anorexie, harcèlement, contenus pornographiques ... Vous n'imaginez pas à quoi il est confronté.
                        </h11>
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