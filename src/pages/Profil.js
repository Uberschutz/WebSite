import React, { Component } from 'react';
import '../styles/bootstrap.css';

import { Icon } from 'antd';

class Profil extends Component {
    render() {
        return (
            <div className="description-txt">
                <h4 className="name-font">
                    Prénom
                </h4> <br/>
                <h6>
                    Enfants protégés par Überschutz : X <br/> <br/>
                    Abonnement utilisé : Premium <br/> <br/>
                    Echéancier de paiement : <br/>
                </h6> <br/>
                <table className="table">
                    <thead className="table-primary">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Nom du prélèvement</th>
                        <th scope="col">Payé ?</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">22/05/2019</th>
                        <td>Achat d'Überschutz Premium</td>
                        <td>
                            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">25/05/2019</th>
                        <td>Prélèvement n°1 Überschutz Premium</td>
                        <td>En cours ...</td>
                    </tr>
                    <tr>
                        <th scope="row">25/06/2019</th>
                        <td>Prélèvement n°2 Überschutz Premium</td>
                        <td>Prochainement</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
            </div>
        )
    }
}

export default Profil;