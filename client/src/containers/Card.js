import { connect } from 'react-redux';
import { toggleCard } from '../actions/GameActions';

import CardView from '../components/CardView';

const mapStateToProps = (state, ownProps) => {
	return {
		isSelected: state.gameState.mySelected.includes(ownProps.index),
		index: ownProps.index,
		value: ownProps.value
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleCard: cardIndex => dispatch(toggleCard(cardIndex))
	}
};

const Card = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardView);

export default Card;