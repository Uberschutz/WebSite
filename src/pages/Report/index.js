import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Report from './Report'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({

})

const ReportContainer = connect(mapStateToProps, mapDispatchToProps)(Report)

export default ReportContainer