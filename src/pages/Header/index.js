import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Header from './Header'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	setLanguage: bindActionCreators(actions.setLanguage, dispatch),
	setLogged: bindActionCreators(actions.setLogged, dispatch),
	setUser: bindActionCreators(actions.setUser, dispatch),
	// setAuthToken: bindActionCreators(actions.setAuthToken, dispatch)
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer