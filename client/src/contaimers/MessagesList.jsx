import React from 'react';
import { connect } from 'react-redux'

import ChatHeader from 'components/ChatHeader.jsx'
import ChatControl from 'components/ChatControl.jsx'
import SingleMessage from 'components/SingleMessage.jsx'

class MessagesList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		this.chatWrap.scrollTop = this.ul.scrollHeight;
	}

	render() {
		return (
			<div class="chat">
				<ChatHeader />				
				<div ref={chatWrap => this.chatWrap = chatWrap} class="chat-history">
					<ul ref={ul => this.ul = ul}>
						{this.props.messages.map(msg => 
							<SingleMessage key={msg.time} currentID={this.props.currentUser.id} {...msg} />
						)}						
					</ul>
					
				</div>
				
				<ChatControl />
				
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messages,
		currentUser: state.peoples[0]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
