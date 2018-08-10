import React, { Component } from 'react';
import classNames from 'classnames';

const colors = ['red', 'green', 'purple'];
const shapes = ['curve', 'oval', 'diamond'];
const shading = ['empty', 'half', 'full'];

function getShape(card) {
	return Math.floor(card / 27) % 3;
}

function getColor(card) {
	return Math.floor(card / 9) % 3;
}

function getShade(card) {
	return Math.floor(card / 3) % 3;
}

function getNumber(card) {
	return card % 3 + 1;
}

class CardView extends Component {
	render() {
		const images = [];
		for (let i = 0; i < getNumber(this.props.value); i++) 
			images.push(<img class="shape" src={require('../assets/'+getShape(this.props.value).toString() + getShade(this.props.value).toString() + getColor(this.props.value).toString() + '.png')}></img>)

		return (
			<div className={classNames("card-container", this.props.isSelected ? "selected" : "")}
				onClick={() => this.props.toggleCard(this.props.index)} >
				{images}
			</div>
		)
	}
}

export default CardView;