import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Payement from './Payement'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
})

const PayementContainer = connect(mapStateToProps, mapDispatchToProps)(Payement)

export default PayementContainer
