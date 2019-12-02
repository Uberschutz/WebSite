import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Registration from './Registration'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
    setLogged: bindActionCreators(actions.setLogged, dispatch),
    setUser: bindActionCreators(actions.setUser, dispatch)
})

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default RegistrationContainer