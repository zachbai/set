import React from 'react';

import Board from '../containers/Board';
import Lobby from '../containers/Lobby';
import Register from '../containers/Register';

const AppView = (props) => {
	return (
		<div className="app-container">
			{
				props.startedGame ?
				<Board />
				:
				(
					props.createdPlayer ?
					(
						<Lobby />
					)
					:
					<Register />
				)
			}
		</div>
	);
};

export default AppView;