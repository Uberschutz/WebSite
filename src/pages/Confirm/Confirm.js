import React, { Component } from 'react';
import '../../styles/bootstrap.css';

import axios from 'axios';

class Confirm extends Component {

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.post('/verifyaccount', {
            id: this.props.match.params.id.id
        }).then(response => {
            console.log(response);
            setTimeout(() => this.props.history.push('/'), 5000);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <span>Votre compte a bien été confirmé ! Merci !</span>
            </div>
        )
    }
}

export default Confirm;