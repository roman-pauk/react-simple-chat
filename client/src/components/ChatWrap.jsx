import React from 'react';
import PeopleList from 'containers/PeopleList.jsx';
import MessagesList from 'containers/MessagesList.jsx';
import Authoc from './AuthHoc.jsx'

class ChatWrap extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<PeopleList />
				<MessagesList />
			</div>
		);
	}
}

export default Authoc(ChatWrap);