import { connect } from 'react-redux';

import { requestToStartGame } from '../actions/LobbyActions';
import StartGameButtonView from '../components/StartGameButtonView';

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickStartGame: () => dispatch(requestToStartGame())
	};
};

const StartGameButton = connect(
	mapStateToProps,
	mapDispatchToProps
)(StartGameButtonView);

export default StartGameButton;