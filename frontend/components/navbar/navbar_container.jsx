import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.session.currentUserId,
	};
};

const mDTP = (dispatch) => {
	return {
	logout: () => dispatch(logout()),
	};
};

export default withRouter(connect(mapStateToProps, mDTP)(NavBar));