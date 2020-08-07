import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Others from './Others'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
})

const OthersContainer = connect(mapStateToProps, mapDispatchToProps)(Others)

export default OthersContainer
