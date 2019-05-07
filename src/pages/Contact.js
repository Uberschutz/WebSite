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
                            </h7>
                        </h6>
                    </div>
                </div>
                <Form/>
            </div>
        )
    }
}

/* Nous en tant que jeunes adultes on trouve que certains contenus sont choquants sur Internet, donc qu'en est-il d'un enfant ?
* lieu de partage gna gna gna ... qu'on voudrait que ce soit plus sécurisé  */

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


export { Contact, Form };