import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import DataInformations from './DataInformations'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({
    setNewsletter: bindActionCreators(actions.setNewsletter, dispatch)
})

const DataInformationsContainer = connect(mapStateToProps, mapDispatchToProps)(DataInformations)

export default DataInformationsContainer
