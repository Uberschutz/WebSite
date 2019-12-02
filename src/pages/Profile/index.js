import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Profile from './Profile'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({

})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer