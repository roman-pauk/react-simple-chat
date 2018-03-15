import { connectedNewUser, disconnectedUser, resiveNewMessage } from 'actions';
import store from 'store'

export default ((wsUrl) => {

	let ws = new WebSocket(wsUrl);
	const {dispatch} = store;

	ws.onopen = () => {
		console.log('connected!')
	}

	ws.onmessage = ({data}) => {
		console.log(data);
		data = JSON.parse(data);
		switch (data.type) {
		case 'connected_new_user':
			dispatch(connectedNewUser(data.userName, data.userID))
			break;
		case 'disconnected_user':
			dispatch(disconnectedUser(data.userID))
			break;
		case 'message':
			dispatch(resiveNewMessage(data.data))
			break;
		}
	}
	let count = 0;

	const emit = (msg) => {
		if (count == 5) {
			return;
		}
		if (ws.readyState !== 1) {
			setTimeout(() => {
				emit(msg)
				count++;
			}, 500)
		} else {
			ws.send(msg)
			count = 0;
		}
	}

	return { emit }

})('ws://localhost:3000')