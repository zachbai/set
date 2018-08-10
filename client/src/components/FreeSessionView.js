import React from 'react';
import classNames from 'classnames';

const FreeSessionView = (props) => {
	let playerString = "";
	for (let i = 0; i < props.players.length; i++) {
		playerString += props.players[i]
		if (i < props.players.length - 1) 
			playerString += ", "
	}

	return (
		<div className={classNames('free-session-container')}>
			<div className={classNames('free-session-text')}>
				{playerString}
			</div>
			<div className={classNames('join-session-button')}
				onClick={() => props.onClickJoin(props.sessionId)}>
				{"join"}
			</div>
		</div>
	)
};

export default FreeSessionView;