import React from 'react';
import FreeSession from '../containers/FreeSession';
import FreePlayerView from './FreePlayerView';
import NewGameButton from '../containers/NewGameButton';
import StartGameButton from '../containers/StartGameButton';

import classNames from 'classnames'

const LobbyView = (props) => {

	return (
		<div className={classNames('lobby-container')}>
			<div className={classNames('free-player-header')}>
				online players
			</div>
			<div className={classNames('free-players-container')}>
				{
					(props.joinedGame ? [] : [<FreePlayerView player={props.nickname} isNickname={true} />])
					.concat(props.freePlayers.map(freePlayer => <FreePlayerView player={freePlayer} isNickname={false}/>))
				}
			</div>
			<div className={classNames('free-session-header')}>
				<div>
					{
						props.joinedGame ? 'new game' : 'open games'
					}
				</div>
				{
					props.joinedGame ? 
					(props.createdGame ? <StartGameButton/> : null)	
					: <NewGameButton/>
				}
			</div>
			{
				props.joinedGame ? 
				(
					<div className={classNames('free-players-container')}>
					{ [<FreePlayerView player={props.nickname} isNickname={true}/>].concat(props.players.map(player => <FreePlayerView player={player} isNickName={false}/>))}
					</div>
				)
				:
				(
				<div className={classNames('free-sessions-container')}>
					{props.freeGames.map(session => <FreeSession sessionId={session.sessionId} players={session.players}/>)}
				</div>
				)

			}
		</div>
	)
};

export default LobbyView;