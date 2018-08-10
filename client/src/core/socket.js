import io from 'socket.io-client';
import store from '../store';

import { noSet, setMade } from '../actions/GameActions';
import { receivedLobbyState, createdPlayer, joinedGame, createdGame, startedGame } from '../actions/LobbyActions';
import { receivedGameState } from '../actions/GameActions';

class Socket {
	constructor() {
		this.socket = null;
		this.nickname = null;
		this.sessionId = null;
	}

	listen() {
		this.socket = io('http://localhost:3000');
		console.log("Listening on client socket...");

		this.socket.on('new-game', gameState => {
			console.log(gameState);
			store.dispatch(gameStarted(gameState));
		});

		this.socket.on('set-made', newBoard => {
			console.log("Set made!");
			store.dispatch(setMade(newBoard));
		});

		this.socket.on('no-set', () => {
			console.log("No set!");
			store.dispatch(noSet());
		});

		this.socket.on('updated-lobby-state', lobbyState => store.dispatch(receivedLobbyState(lobbyState)));
		this.socket.on('updated-game-state', gameState => store.dispatch(receivedGameState(gameState)));

		this.socket.on('created-player', nickname => {
			this.nickname = nickname;
			store.dispatch(createdPlayer(nickname));
		});

		this.socket.on('created-game', sessionId =>{
			this.sessionId = sessionId;
			store.dispatch(createdGame(sessionId));

		});

		this.socket.on('joined-game', sessionId => {
			this.sessionId = sessionId;
			store.dispatch(joinedGame(sessionId))
		});

		this.socket.on('started-game', () => store.dispatch(startedGame()));
	}

	checkSet(cards) {
		this.socket.emit('check-set', this.sessionId, this.nickname, cards);
	}

	requestToCreatePlayer(nickname) {
		this.socket.emit('request-create-player', nickname);
	}

	requestToCreateGame() {
		this.socket.emit('request-create-game', this.nickname);
	}

	requestToJoinGame(sessionId) {
		this.socket.emit('request-join-game', sessionId, this.nickname);
	}

	requestToStartGame(sessionId) {
		this.socket.emit('request-start-game', sessionId);
	}
}

export default new Socket();