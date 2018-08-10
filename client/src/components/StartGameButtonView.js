import React from 'react';
import classNames from 'classnames';

const StartGameButtonView = (props) => {
	return (
		<div className={classNames('start-game-button-container')}
			onClick={props.onClickStartGame}>
			start game
		</div>
	)
};

export default StartGameButtonView;