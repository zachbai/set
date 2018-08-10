import SetActionTypes from '../actions/SetActionTypes';
import Socket from '../core/socket';

const initialState = {
	nickname: "",
	requestedToCreatePlayer: false,
	createdPlayer: false
};

const PlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SetActionTypes.REQUEST_TO_CREATE_PLAYER:
			Socket.requestToCreatePlayer(action.nickname);
			return Object.assign({}, state, {
				requestedToCreatePlayer: true
			});

		case SetActionTypes.CREATED_PLAYER:
			return Object.assign({}, state, {
				requestedToCreatePlayer: false,
				createdPlayer: true,
				nickname: action.nickname	
			});
		
		default:
			return state;
	}
};

export default PlayerReducer;

