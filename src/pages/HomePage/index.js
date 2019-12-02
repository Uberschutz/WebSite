import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({
})

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer