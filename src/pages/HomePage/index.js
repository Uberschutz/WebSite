import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import HomePage from './HomePage'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
	getServiceData: bindActionCreators(actions.getServiceData, dispatch),
	sendServiceData: bindActionCreators(actions.sendServiceData, dispatch),
	saveAuthToken: bindActionCreators(actions.saveAuthToken, dispatch),
	subscribeToService: bindActionCreators(actions.subscribeToService, dispatch),
	updateFill: bindActionCreators(actions.updateFill, dispatch),
	updateActionFill: bindActionCreators(actions.updateActionFill, dispatch),
	toggleAREA: bindActionCreators(actions.toggleAREA, dispatch),
})

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer