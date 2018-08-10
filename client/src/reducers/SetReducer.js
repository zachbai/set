import { combineReducers } from 'redux';
import GameReducer from './GameReducer';
import LobbyReducer from './LobbyReducer';
import PlayerReducer from './PlayerReducer';

const SetReducer = combineReducers({
	playerState: PlayerReducer,
	lobbyState: LobbyReducer,
	gameState: GameReducer
});

export default SetReducer;
