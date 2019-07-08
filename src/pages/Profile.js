import React, { Component } from 'react';
import '../styles/bootstrap.css';

import { Icon } from 'antd';

import {displayContent} from '../utils/translationDisplay';
import Unauthorized from "./Unauthorized";

class Profile extends Component {
    render() {
    	if (this.props.logged) {
		    let i = 0;
		    return (
			    <div className="description-txt">
				    <h4 className="name-font">
					    {displayContent(this.props.lang, i++, 'profile')}
				    </h4> <br/>
				    <h6>
					    {displayContent(this.props.lang, i++, 'profile')}<br/><br/>
					    {displayContent(this.props.lang, i++, 'profile')}<br/><br/>
					    {displayContent(this.props.lang, i++, 'profile')}<br/>
				    </h6> <br/>
				    <table className="table">
					    <thead className="table-primary">
					    <tr>
						    <th scope="col">Date</th>
						    <th scope="col">{displayContent(this.props.lang, i++, 'profile')}</th>
						    <th scope="col">{displayContent(this.props.lang, i++, 'profile')}</th>
					    </tr>
					    </thead>
					    <tbody>
					    <tr>
						    <th scope="row">22/05/2019</th>
						    <td>Achat d'Überschutz Premium</td>
						    <td>
							    <Icon type="check-circle" theme="twoTone"
							          twoToneColor="#52c41a"/>
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
	    } else {
    		return (
    			<Unauthorized/>
		    )
	    }
    }
}

export default Profile;