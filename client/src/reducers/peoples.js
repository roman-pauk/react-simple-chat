import Constants from 'constants';

export default (store = [], action) => {
	switch (action.type) {
	case Constants.CONNECTED_NEW_USER:
		return store.concat({name: action.userName, id: action.userID});
	case Constants.DISCONNECTED_USER:
		return store.filter(el => el.id === action.userID);
	}
	return store;
}