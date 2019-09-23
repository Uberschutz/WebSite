import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Confirm from './Confirm'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
    setLogged: bindActionCreators(actions.setLogged, dispatch),
    setUser: bindActionCreators(actions.setUser, dispatch)
})

const ConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(Confirm)

export default ConfirmContainer