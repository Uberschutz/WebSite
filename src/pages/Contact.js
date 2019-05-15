import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="form-align">
                <div> <br/>
                <h9 className="h9-font">
                    Qui sommes nous ? Que faisons nous ?
                </h9> <br/> <br/>
                    <div className="description-txt">
                        <h6 className="">
                            Überschutz :
                            <br/><h7>
                                Nous sommes un groupe de 7 étudiants d'Epitech de la promo 2021. <br/>
                                Notre groupe a été créé en octobre 2018 (tout d'abord 3 personnes) lors de la Moonshot puis s'est complété courant janvier 2019.
                            </h7> <br/> <br/>
                            Notre but :
                            <br/><h7>
                                Nous voulons qu'Internet soit un lieu de partage, de détente et de recherche. <br/>
                                Beaucoup trop de personnes et d'enfants sont harcelés, arnaqués ou confrontés à du contenu inapproprié.
                                <br/>
                                Ainsi, nous souhaitons guider les plus jeunes afin qu'ils apprennent à utiliser Internet de la meilleure manière possible pour eux selon l'éducation que leurs parents veulent leurs donner.
                            </h7> <br/> <br/>
                            Notre solution :
                            <br/><h7>
                                Aujourd'hui, en tant que jeunes adultes, nous trouvons que certains contenus sont choquants sur Internet et que ce n'est pas assez sécurisé. <br/>
                                Donc qu'en est-il pour un enfant ? <br/>
                                Nous proposons un logiciel capable de monitorer une navigation Internet. <br/>
                                De ce fait, les enfants pourront être avertis que leur recherche n'est pas adaptée pour eux selon leurs parents.
                            </h7> <br/>
                        </h6>
                        <br/> <br/>
                    </div>
                </div>
                <Form/>
                <Faq/>
            </div>
        )
    }
}

class Form extends Component {
    render() {
        return (
            <div className="card text-white bg-dark">
                <h9 className="h9-font">
                    <br/>Vous êtes intéressés par notre solution ?
                </h9>
                <br/>
                <h11>
                    N'hésitez pas à vous tenir informés en remplissant ce formulaire !
                </h11>
                <br/>
                <h11>
                    Ou en nous contactant à l'adresse suivante : <h11 className="address">
                    uberschutz_2021@labeip.epitech.eu</h11>
                </h11>
                <form><br/>
                <div className="form-group">
                    <div className="form-group form-align">
                        <label>Name or Surname</label>
                        <input type="text" className="form-control form-box" placeholder="Name or Surname"/>
                    </div>
                    <label>Email address</label>
                    <input type="email" className="form-control form-box" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted col-sm-8">
                        We'll never share your email with anyone else.
                    </small>
                </div><button type="submit" className="btn btn-primary button-footer">Submit</button>
                </form>
            </div>
        )
    }
}

class Faq extends Component {
    render() {
        return (
            <div className="form-align">
                <h4>
                    FAQ :
                </h4> <br/>

                <div className="row responsive-image">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list"
                               data-toggle="list" href="#list-home" role="tab" aria-controls="home">Menu</a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list"
                               data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profil</a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list"
                               data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list"
                               data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Parametres</a>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                                 aria-labelledby="list-home-list">
                                <span>
                                    Ici une question ?
                                </span>
                                <br/>
                                <span className="description-txt">
                                    LA LA REPONSE
                                </span>
                            </div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel"
                                 aria-labelledby="list-profile-list">...
                            </div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel"
                                 aria-labelledby="list-messages-list">...
                            </div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel"
                                 aria-labelledby="list-settings-list">...
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


/* Definir "non bloquant" et "non intrusif"
* Comment paramétrer l'application / logiciel ?
* Comment initialiser le controle parental sur mon appareil ?
* Aborder question du prix (abonnement)
* Qu'est ce que peuvent faire les parents avec logiciel (bloqué, ou avertir, tout en étant prévenus ...) par systeme d'option*/


export { Contact, Form, Faq };