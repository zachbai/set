import SetActionTypes from './SetActionTypes';

export const receivedGameState = gameState => {
	return {
		type: SetActionTypes.RECEIVED_GAME_STATE,
		board: gameState.board
	}
};

export const toggleCard = (cardIndex) => {
	return {
		type: SetActionTypes.TOGGLE_CARD,
		cardIndex: cardIndex
	};
};

export const setMade = (newBoard) => {
	return {
		type: SetActionTypes.SET_MADE,
		newBoard: newBoard 
	};
};

export const noSet = () => {
	return {
		type: SetActionTypes.NO_SET
	};
};
