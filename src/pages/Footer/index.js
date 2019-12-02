import { connect } from 'react-redux'
import Footer from './Footer'

const mapStateToProps = state => ({
	base: state.base,
})

const mapDispatchToProps = dispatch => ({

})

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer