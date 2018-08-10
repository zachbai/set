const DECK_SIZE = 81
const BOARD_SIZE = 12

class Game {
	constructor() {
		this.deck = [];
		this.board = [];

		const added = [];
		for (let i = 0; i < DECK_SIZE; i++)
			added.push(false);

		for (let i = 0; i < DECK_SIZE; i++) {
			let newCard = Math.round(Math.random(DECK_SIZE) * 80)

			while (added[newCard])
				newCard = Math.round(Math.random(DECK_SIZE) * 80)

			added[newCard] = true;
			this.deck.push(newCard)
		}

		for (let i = 0; i < BOARD_SIZE; i++)
			this.board.push(this.deck.pop());
	}	

	getBoard() {
		return this.board
	}

	checkSet(cards) {
		let index1 = cards[0];
		let index2 = cards[1];
		let index3 = cards[2];
		if (!verifySet(this.board[index1], this.board[index2], this.board[index3])) {
			return false;
		}
		
		this.board[index1] = this.deck.pop();
		this.board[index2] = this.deck.pop();
		this.board[index3] = this.deck.pop();

		return true;
	}
}

function verifySet(card1, card2, card3) {
	let dimVerified = 0

	if (allEqualOrDifferent(getShape(card1), getShape(card2), getShape(card3)))
		dimVerified++

	if (allEqualOrDifferent(getColor(card1), getColor(card2), getColor(card3)))
		dimVerified++

	if (allEqualOrDifferent(getShade(card1), getShade(card2), getShade(card3)))
		dimVerified++

	if (allEqualOrDifferent(getNumber(card1), getNumber(card2), getNumber(card3)))
		dimVerified++
	
	return dimVerified == 4
}

function getShape(card) {
	return Math.floor(card / 27)
}

function getColor(card) {
	return Math.floor(card / 9)
}

function getShade(card) {
	return Math.floor(card / 3)
}

function getNumber(card) {
	return card % 3
}

function allEqualOrDifferent(i, j, k) {
	return (i == j && i == k) || (i != j && j != k && i != k)
}

export default Game;
