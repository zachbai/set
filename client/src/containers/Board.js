import { connect } from 'react-redux';
import BoardView from '../components/BoardView';

const mapStateToProps = (state, ownProps) => {
	return {
		cards: state.gameState.board
	};
}

const mapDispatchToProps = (state, ownProps) => {
	return {};
}

const Board = connect(
	mapStateToProps,
	mapDispatchToProps,
)(BoardView);

export default Board;