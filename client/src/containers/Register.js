import { connect } from 'react-redux';
import { requestToCreatePlayer } from '../actions/LobbyActions';

import RegisterView from '../components/RegisterView';

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: nickname => dispatch(requestToCreatePlayer(nickname))
	};
};

const Register = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterView);

export default Register;