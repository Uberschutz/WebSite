import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="form-align">
                <h9 className="h9-font">
                    Vous êtes intéressés par notre solution ?
                </h9>
                <br/>
                <h11>
                    N'hésitez pas à vous tenir informés en remplissant ce formulaire !
                </h11>
                <br/>
                <h11>
                    Ou en nous contactant à l'adresse suivante : <h11 className="address">
                        uberschutz_2021@labeip.epitech.eu
                    </h11>
                </h11>
                <form>
                    <br/>
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
                    </div>
                    <button type="submit" className="btn btn-primary button-footer">Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;