import { connect } from 'react-redux';

import { requestToCreateGame } from '../actions/LobbyActions';
import NewGameButtonView from '../components/NewGameButtonView';

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickNewGame: () => dispatch(requestToCreateGame())
	};
};

const NewGameButton = connect(
	mapStateToProps,
	mapDispatchToProps
)(NewGameButtonView);

export default NewGameButton;