import { combineReducers } from 'redux'
import messages from './messages.js'
import peoples from './peoples.js'

export default combineReducers({
	messages,
	peoples
});