import React from 'react';
import classNames from 'classnames';

const NewGameButtonView = (props) => {
	return (
		<div className={classNames('new-game-button-container')}
			onClick={props.onClickNewGame}>
			new game
		</div>
	)
};

export default NewGameButtonView;