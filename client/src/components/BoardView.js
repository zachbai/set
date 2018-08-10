import React from 'react';
import { Component } from 'react';

import Card from '../containers/Card';

class BoardView extends Component {
	render() {
		return (
			<div className="board-container">
				{ this.props.cards.map((x, i) => <Card index={i} value={x} />) }
			</div>
		)
	}
}

export default BoardView;