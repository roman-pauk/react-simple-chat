export default (store = [], action) => {
	if (action.type === 'CONNECTED_NEW_USER') {
		return store.concat(action.userName);
	}
	return store;
}