import { connect } from 'react-redux';
import LobbyView from '../components/LobbyView';

const mapStateToProps = (state, ownProps) => {
	let freeGames = [];
	Object.keys(state.lobbyState.freeGames).forEach(sessionId => {
		freeGames.push({
			sessionId,
			players: state.lobbyState.freeGames[sessionId]
		})
	});

	return {
		nickname: state.playerState.nickname,
		freePlayers: state.lobbyState.freePlayers.filter(p => p != state.playerState.nickname),
		freeGames: freeGames,
		joinedGame: state.lobbyState.joinedGame,
		createdGame: state.lobbyState.createdGame,
		players: state.lobbyState.opponentPlayers.filter(p => p != state.playerState.nickname)
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

const Lobby = connect(
	mapStateToProps,
	mapDispatchToProps
)(LobbyView);

export default Lobby;