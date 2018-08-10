import SetActionTypes from '../actions/SetActionTypes';
import Socket from '../core/socket';

const initialState = {
	board: [],
	mySelected: [],
	players: [],
};

const GameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SetActionTypes.RECEIVED_GAME_STATE: 
			return Object.assign({}, state, {
				board: action.board,
				mySelected: []
			});

		case SetActionTypes.TOGGLE_CARD:
			if (state.mySelected.includes(action.cardIndex)) {
				return Object.assign({}, state, {
					mySelected: state.mySelected.filter(v => v != action.cardIndex)
				});
			} else if (state.mySelected.length == 2) {
				Socket.checkSet([...state.mySelected, action.cardIndex]);
			} else if (state.mySelected.length == 3)
				return state

			return Object.assign({}, state, {
				mySelected: [...state.mySelected, action.cardIndex]
			});
		
		case SetActionTypes.SET_MADE:
			return Object.assign({}, state, {
				board: action.newBoard,
				mySelected: []
			});

		case SetActionTypes.OTHER_SET_MADE:
			return Object.assign({}, state, {
				board: action.newBoard,
				mySelected: []
			});
		
		case SetActionTypes.NO_SET:
			return Object.assign({}, state, {
				mySelected: []
			});

		default:
			return state;
	}
}

export default GameReducer;