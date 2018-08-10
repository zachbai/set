import Session from "./session.js";

let nextSessionId = 0;

function getNextSessionId() {
	nextSessionId++;
	return 'session' + nextSessionId.toString();
}

class SessionManager {
	constructor() {
		this.freePlayers = [];
		this.activeSessions = new Set();
		this.sessionMap = new Map();
	}

	getState() {
		let state = {};
		state.freePlayers = this.freePlayers;
		state.freeGames = {};

		this.sessionMap.forEach((session, sessionId) => {
			if (!this.activeSessions.has(sessionId))
				state.freeGames[sessionId] = session.getPlayers();
		});

		return state;
	}

	newPlayer(player) {
		this.freePlayers.push(player);
		return this.getState();
	}

	addSession(owner) {
		let newSessionId = getNextSessionId();
		this.sessionMap.set(newSessionId, new Session(owner));

		this.freePlayers = this.freePlayers.filter(player => player != owner);

		return newSessionId;
	}

	addPlayerToSession(sessionId, player) {
		this.sessionMap.get(sessionId).addPlayer(player);
		this.freePlayers = this.freePlayers.filter(playerId => playerId != player);

		return this.getState();
	}

	gameStart(sessionId) {
		this.activeSessions.add(sessionId);
		return this.sessionMap.get(sessionId).startGame();
	}

	checkSet(sessionId, player, cards) {
		return this.sessionMap.get(sessionId).checkSet(player, cards);
	}

	gameOver(sessionId) {
		this.sessionMap.get(sessionId).getPlayers().forEach(player => this.freePlayers.add(player));
		this.sessionMap.remove(sessionId);
		this.activeSessions.delete(sessionId);

		return this.state;
	}
}

export default new SessionManager();