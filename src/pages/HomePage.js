import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import canvas from '../assets/canvas2.png';
import whois from '../assets/CacherPseudo.jpg';
import logiciel from '../assets/logiciel.png';
import navigation from '../assets/navigation.png';
import bloquant from '../assets/bloquant.png';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <span className="text-span">
                    Internet :
                    <br/> êtes-vous conscients des dangers <br/>que rencontrent vos enfants ?
                </span>
                <div className="row responsive-image Home">
                    <div className="img-intro">
                        <br/><br/>
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
                <div className="Home responsive-image">
                    <br/><br/>
                    <h5 className="rappel-info h7-font">
                        En quelques mots :
                    </h5>
                    <br/><br/>
                    <div className="row responsive-image">
                        <div className="col">
                            <img src={logiciel} alt="logiciel"/>
                            <br/><br/>
                            <span className="rappel-info">
                                Un logiciel
                            </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={navigation} alt="navigation"/>
                            <br/> <br/>
                            <span className="rappel-info">
                                Non bloquant
                            </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={bloquant} alt="bloquant"/>
                            <br/> <br/>
                            <span className="rappel-info">
                                Non intrusif
                            </span>
                        </div>
                    </div>
                    <br/>
                    <h7 className="rappel-info">
                        Pour protéger votre enfant et discuter avec lui lorsqu'une situation compliquée se présente.
                    </h7>
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default HomePage;