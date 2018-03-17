import Constants from 'constants';

export default (store = [], action) => {
	if (action.type === Constants.RESIVE_NEW_MESSAGE) {
		return store.concat({
			author: action.author,
			text: action.text,
			time: action.time,
			color: action.color,
			userID: action.userID
		})
	}
	return store;
}