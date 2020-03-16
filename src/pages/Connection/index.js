import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Connection from './Connection'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	setLogged: bindActionCreators(actions.setLogged, dispatch),
	setUser: bindActionCreators(actions.setUser, dispatch),
	setNewsletter: bindActionCreators(actions.setNewsletter, dispatch),
	setAuthToken: bindActionCreators(actions.setAuthToken, dispatch)
})

const ConnectionContainer = connect(mapStateToProps, mapDispatchToProps)(Connection)

export default ConnectionContainer