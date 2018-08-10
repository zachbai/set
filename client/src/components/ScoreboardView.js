import React from 'react';

const ScoreboardView = (props) => {
	return (
		<div className='scoreboard-container'>
			<span className='scoreboard-score'>
				{props.points}
			</span>
		</div>
	);
};

export default ScoreboardView;