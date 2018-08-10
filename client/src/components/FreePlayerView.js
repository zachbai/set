import React from 'react';

import classNames from 'classNames';

const FreePlayerView = (props) => {
	return (
		<div className={classNames('free-player-container')}>
			<div className={classNames('free-player-text')}>
				{props.player + (props.isNickname ? ' (you)' : '')}
			</div>
		</div>
	)
};

export default FreePlayerView;