import React, { Component } from 'react';
import '../styles/bootstrap.css';

import { Icon } from 'antd';

const content = require('../assets/text');

class Profil extends Component {

    displayContent(content) {
        // return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
        return(content)
    }

    render() {
        let i = 0;
        return (
            <div className="description-txt">
                <h4 className="name-font">
                    {/*Prénom*/}
                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.profile[i++])}
                </h4> <br/>
                <h6>
                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.profile[i++])}<br/> <br/>
                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.profile[i++])}<br/> <br/>
                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.profile[i++])}<br/>
                </h6> <br/>
                <table className="table">
                    <thead className="table-primary">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.profile[i++])}</th>
                        <th scope="col">{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.profile[i++])}</th>
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