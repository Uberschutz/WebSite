import { connect } from 'react-redux'
import Confirm from './Confirm'

const mapStateToProps = state => ({
    base: state.base,
})

const mapDispatchToProps = dispatch => ({

})

const ConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(Confirm)

export default ConfirmContainer