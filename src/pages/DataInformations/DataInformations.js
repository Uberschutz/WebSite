import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";

import ReactGA from 'react-ga';

export default class DataInformations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
        };
    }

    componentDidMount() {
        if (process.env.REACT_APP_ANALYTICS === 'true') {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
        if (this.props.base) {
            const {base: {language}} = this.props;
            this.setState({
                lang: language
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.base && (this.props.base.language !== this.state.lang)) {
            // console.log(prevProps, this.props);
            this.setState({lang: this.props.base.language}, () => console.log('re'));
        }
    }

    render() {
        let i = 0;
        return(
            <div className="responsive-image donnees">
                <h3 className="h7-font">Données personnelles</h3>
                <span className="italic-txt">L'administration du site web Überschutz nécessite un traitement de données personnelles</span> <br/> <br/>

                <h5 className="h7-font">Objet du traitement de données</h5>
                <span className="h7-font">Finalités</span> <br/>
                <span>Le traitement a pour objet la gestion du site web administré par Überschutz. Il permet :</span>
                <ul>
                    <li>La connexion aux espaces privés</li>
                    <li>La gestion de la clientèle et du support client</li>
                    <li>L'envoi d'emails lors des différentes inscriptions sur le site</li>
                    <li>L'envoi par emails de lettres d'informations (optionnel)</li>
                </ul>
                <span>Certaines données sont collectées automatiquement du fait de vos actions sur le site afin d'effectuer des mesures d'audience (le nombre de pages vues, le nombre de visite du site, les pages consultées, l'horodatage etc.) ou sont nécessaires à la prévention et la résolution d'incidents techniques</span> <br/> <br/>

                <h5 className="h7-font">Données collectées</h5>
                <span>Les données personnelles collectées et traitées sont vos nom, prénom, email, mot de passe et cookies</span> <br/> <br/>

                <h5 className="h7-font">Destinataires</h5>
                <span>Les données collectées sont destinées à notre service technique. Elles sont également transmises aux tiers suivants :</span>
                <ul>
                    <li>Google Analytics (analytics.google.com) en tant qu'outil de suivi d'audience,</li>
                    <li>Microsoft Azure (azure.microsoft.com) en tant que machine virtuelle de stockage et sauvegarde des données</li> <br/>
                </ul>

                <h5 className="h7-font">Durée de conservation des données</h5>
                <span>Les données sont conservées pendant toute la durée d'utilisation du service puis sont archivées pour une durée supplémentaire en lien avec les durées de prescription et de conservation légale pour des raisons strictement limitées et autorisées par la loi. Passé ce délai, elles sont supprimées.</span> <br/> <br/>

                <h5 className="h7-font">Localisation et hébergement des données collectées</h5>
                <span>Les données collectées sont hébergées par les prestataires suivants :</span>
                <ul>
                    <li>Microsoft Azure (azure.microsoft.com), en qualité d'hébergeur du site web (localisation des données : Europe du Nord)</li>
                    <li>Firstheberg (firstheberg.com), en qualité d'hébergeur du nom de domaine (localisation des données : France),</li>
                    <li>Google Analytics (analytics.google.com) en tant qu'outil de suivi d'audience (localisation des données : Monde)</li>
                    <li>Microsoft Azure (azure.microsoft.com), en tant que machine virtuelle de stockage de données (localisation des données : Europe du Nord)</li> <br/>
                </ul>

                <h5 className="h7-font">Retrait du consentement</h5>
                <span>Vous pouvez retirer à tout moment votre consentement sur l'utilisation de vos données personnelles non-indispensables à la bonne utilisation du service fourni par ce site Internet : </span> <br/>
                <ul>
                    <li>en vous connectant à votre compte et en procédant à sa suppression si vous disposez d'un compte sur notre site web,</li>
                    <li>en écrivant à test.controleparental.donnees@gmail.com pour le retrait de données que vous nous auriez communiqué par le biais des formulaires présents sur le site.</li> <br/>
                </ul>

                <div className="margin-footer">
                    <h3 className="h7-font">Contact</h3>
                    <span>Überschutz</span> <br/>
                    <span>uberschutz.epitech@gmail.com</span> <br/>
                </div>
            </div>
        )
    }
}
