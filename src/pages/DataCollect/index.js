import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import DataCollect from './DataCollect'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
    setNewsletter: bindActionCreators(actions.setNewsletter, dispatch)
})

const DataCollectContainer = connect(mapStateToProps, mapDispatchToProps)(DataCollect)

export default DataCollectContainer
