import { connect } from 'react-redux';

import { requestToJoinGame } from '../actions/LobbyActions';
import FreeSessionView from '../components/FreeSessionView';

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickJoin: (sessionId) => dispatch(requestToJoinGame(sessionId))
	}
};

const FreeSession = connect(
	mapStateToProps,
	mapDispatchToProps
)(FreeSessionView);

export default FreeSession;