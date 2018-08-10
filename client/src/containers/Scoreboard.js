import { connect } from 'react-redux';

import ScoreboardView from '../components/ScoreboardView';

const mapStateToProps = (state, ownProps) => {
	return {
		points: state.myPoints
	};
};

const mapDispatchToProps = (state, ownProps) => {
	return {};
};

const Scoreboard = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoreboardView);

export default Scoreboard;