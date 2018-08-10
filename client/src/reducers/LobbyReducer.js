import SetActionTypes from '../actions/SetActionTypes';
import Socket from '../core/socket';

const initialState = {
	sessionId: null,
	requestedToJoinGame: false,
	joinedGame: false,

	requestedToCreateGame: false,
	createdGame: false,
	
	requestedToStartGame: false,
	startedGame: false,

	freePlayers: [],
	freeGames: {},

	opponentPlayers: []
}

const LobbyReducer = (state = initialState, action) => {
	switch (action.type) {

		case SetActionTypes.RECEIVED_LOBBY_STATE:
			let newOpponentPlayers = [];
			if (state.joinedGame)
				newOpponentPlayers = action.updatedFreeGames[state.sessionId]

			return Object.assign({}, state, {
				freePlayers: action.updatedPlayers,
				freeGames: action.updatedFreeGames,
				opponentPlayers: newOpponentPlayers
			});

		case SetActionTypes.REQUEST_JOIN_GAME:
			Socket.requestToJoinGame(action.sessionId);
			return Object.assign({}, state, {
				requestedToJoinGame: true,
			});

		case SetActionTypes.JOINED_GAME:
			return Object.assign({}, state, {
				requestedToJoinGame: false,
				joinedGame: true,
				sessionId: action.sessionId
			});

		case SetActionTypes.REQUEST_CREATE_GAME:
			Socket.requestToCreateGame();
			return Object.assign({}, state, {
				requestedToCreateGame: true
			});
		
		case SetActionTypes.CREATED_GAME:
			return Object.assign({}, state, {
				requestedToCreateGame: false,
				createdGame: true,
				joinedGame: true,
				sessionId: action.sessionId
			});
		
		case SetActionTypes.REQUEST_START_GAME:
			Socket.requestToStartGame(state.sessionId);
			return Object.assign({}, state, {
				requestedToStartGame: true
			});
		
		case SetActionTypes.STARTED_GAME:
			return Object.assign({}, state, {
				requestedToStartGame: false,
				startedGame: true
			});

		default: 
			return state;
	}
};

export default LobbyReducer;