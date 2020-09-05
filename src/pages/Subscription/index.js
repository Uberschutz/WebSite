import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Subscription from './Subscription'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
    setLicence: bindActionCreators(actions.setLicence, dispatch)

})

const SubscriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Subscription)

export default SubscriptionContainer
