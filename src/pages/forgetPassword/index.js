import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import forgetPassword from './forgetPassword'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
    setNewsletter: bindActionCreators(actions.setNewsletter, dispatch),
})

const forgetPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(forgetPassword)

export default forgetPasswordContainer
