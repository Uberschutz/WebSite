import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Contact from './Contact'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	setSubscribed: bindActionCreators(actions.setSubscribed, dispatch)
})

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default ContactContainer