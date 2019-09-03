import React, { Component } from 'react';
import '../../styles/bootstrap.css';

import { Icon } from 'antd';

import {displayContent} from '../../utils/translationDisplay';
import Unauthorized from "../Unauthorized";

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr'
		}
	}

	componentDidMount() {
		const {base: { language }} = this.props;
		console.log(language, this.state.lang, 'kek')
		if (this.state.lang !== language) {
			this.setState({
				lang: language
			})
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base.language !== prevProps.base.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
	}

    render() {
    	if (this.props.logged) {
		    let i = 0;
		    return (
			    <div className="description-txt">
				    <h4 className="name-font">
					    {displayContent(this.state.lang, i++, 'profile')}
				    </h4> <br/>
				    <h6>
					    {displayContent(this.state.lang, i++, 'profile')}<br/><br/>
					    {displayContent(this.state.lang, i++, 'profile')}<br/><br/>
					    {displayContent(this.state.lang, i++, 'profile')}<br/>
				    </h6> <br/>
				    <table className="table">
					    <thead className="table-primary">
					    <tr>
						    <th scope="col">Date</th>
						    <th scope="col">{displayContent(this.state.lang, i++, 'profile')}</th>
						    <th scope="col">{displayContent(this.state.lang, i++, 'profile')}</th>
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