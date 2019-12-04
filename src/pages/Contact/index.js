import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Contact from './Contact'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	setNewsletter: bindActionCreators(actions.setNewsletter, dispatch)
})

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default ContactContainer