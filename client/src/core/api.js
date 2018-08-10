import socket from './socket';

const api = {
	init() {
		socket.listen();
	}
};

export default api;