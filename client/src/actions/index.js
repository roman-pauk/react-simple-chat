export const connectedNewUser = (userName) => {
	return {
		type: 'CONNECTED_NEW_USER',
		userName
	}
}