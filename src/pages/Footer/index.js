import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Footer from './Footer'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	setLanguage: bindActionCreators(actions.setLanguage, dispatch)
})

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer