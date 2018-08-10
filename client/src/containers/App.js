import { connect } from 'react-redux';

import AppView from '../components/AppView';

const mapStateToProps = (state, ownProps) => {
	return {
		createdPlayer: state.playerState.createdPlayer,
		startedGame: state.lobbyState.startedGame,
	};
};

const mapDispatchToProps = (state, ownProps) => {
	return {};
};

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppView);

export default App;