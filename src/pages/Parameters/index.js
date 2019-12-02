import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Parameters from './Parameters'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
})

const ParametersContainer = connect(mapStateToProps, mapDispatchToProps)(Parameters)

export default ParametersContainer