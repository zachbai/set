import Game from './Game';

class Session {
	constructor(owner) {
		this.owner = owner;
		this.scoreMap = new Map(); 
		this.game = new Game();
		this.players = [owner];
	}

	addPlayer(newPlayer) {
		this.players.push(newPlayer);
		this.scoreMap.set(newPlayer, 0);
	}

	getBoard() {
		return this.game.getBoard();
	}

	getPlayers() {
		return this.players;
	}

	getGameState() {
		let newScore = {};
		this.scoreMap.forEach((score, player) => newScore.player = score);
		return {
			board: this.game.getBoard(),
			score: newScore
		};
	}

	startGame() {
		this.game = new Game();
		return this.getGameState();
	}

	checkSet(player, cards) {
		let isSet = this.game.checkSet(cards);
		if (isSet) 
			this.scoreMap.set(player, this.scoreMap.get(player) + 1);

		return this.getGameState()
	}
}

export default Session;