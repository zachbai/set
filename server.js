import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

import SessionManager from './server_modules/sessionManager.js';

const app = express();
const httpServer = http.Server(app);
const io = socketio(httpServer);
const compiler = webpack(webpackConfig);

io.on('connection', sock => {
	sock.emit('updated-lobby-state', SessionManager.getState());

	sock.on('request-create-player', (newPlayerId) => {
		let updatedState = SessionManager.newPlayer(newPlayerId);
		console.log(updatedState);

		sock.emit('created-player', newPlayerId);
		io.emit('updated-lobby-state', updatedState)
	});

	sock.on('request-create-game', (owner) => {
		let newSessionId = SessionManager.addSession(owner);
		sock.join(newSessionId.toString());

		sock.emit('created-game', newSessionId);
		io.emit('updated-lobby-state', SessionManager.getState());
	});

	sock.on('request-join-game', (sessionId, player) => {
		let updatedState = SessionManager.addPlayerToSession(sessionId, player);
		sock.join(sessionId.toString());

		sock.emit('joined-game', sessionId);
		io.emit('updated-lobby-state', updatedState);
	});

	sock.on('request-start-game', sessionId => {
		let updatedGameState = SessionManager.gameStart(sessionId);

		io.to(sessionId.toString()).emit('started-game');
		io.to(sessionId.toString()).emit('updated-game-state', updatedGameState);
	});

	sock.on('check-set', (sessionId, player, cards) => {
		console.log('checking set...')
		let updatedGameState = SessionManager.checkSet(sessionId, player, cards);

		io.to(sessionId).emit('updated-game-state', updatedGameState);
	});
});

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath
}));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('index.html'));
});

httpServer.listen(3000, () => console.log('Server listening on port 3000!'));