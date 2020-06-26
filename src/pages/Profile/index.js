import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Profile from './Profile'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	// setUser: bindActionCreators(actions.setUser, dispatch),
	setAuthToken: bindActionCreators(actions.setAuthToken, dispatch),
	setLogged: bindActionCreators(actions.setLogged, dispatch),
	setNewsletter: bindActionCreators(actions.setNewsletter, dispatch)
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer