import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import HomePage from './HomePage'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	// getServiceData: bindActionCreators(actions.getServiceData, dispatch),
})

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer