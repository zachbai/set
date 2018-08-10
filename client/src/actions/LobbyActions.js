import SetActionTypes from './SetActionTypes';

export const requestToCreatePlayer = nickname => {
	return {
		type: SetActionTypes.REQUEST_TO_CREATE_PLAYER,
		nickname
	};
};

export const createdPlayer = nickname => {
	return {
		type: SetActionTypes.CREATED_PLAYER,
		nickname
	};
};

export const receivedLobbyState = lobbyState => {
	return {
		type: SetActionTypes.RECEIVED_LOBBY_STATE,
		updatedPlayers: lobbyState.freePlayers,
		updatedFreeGames: lobbyState.freeGames
	};
};

export const requestToJoinGame = (sessionId) => {
	return {
		type: SetActionTypes.REQUEST_JOIN_GAME,
		sessionId
	};
};

export const joinedGame = (sessionId) => {
	return {
		type: SetActionTypes.JOINED_GAME,
		sessionId
	};
}

export const requestToCreateGame = () => {
	return {
		type: SetActionTypes.REQUEST_CREATE_GAME
	};
};

export const createdGame = (sessionId) => {
	return {
		type: SetActionTypes.CREATED_GAME,
		sessionId
	};
};

export const requestToStartGame = () => {
	return {
		type: SetActionTypes.REQUEST_START_GAME
	};
};

export const startedGame = () => {
	return {
		type: SetActionTypes.STARTED_GAME,
	};
};