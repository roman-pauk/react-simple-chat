import Constants from 'constants';

export const connectedNewUser = (userName, userID) => {
	return {
		type: Constants.CONNECTED_NEW_USER,
		userName,
		userID
	}
}
export const disconnectedUser = (userID) => {
	return {
		type: Constants.DISCONNECTED_USER,
		userID
	}
}

export const resiveNewMessage = ({author, text, time, color}) => {
	return {
		type: Constants.RESIVE_NEW_MESSAGE,
		author,
		text,
		time,
		color
	}
}