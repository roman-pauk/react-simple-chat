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
							<SingleMessage key={msg.time} {...msg} />
						)}					
						<li>
							<div class="message-data">
								<span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
								<span class="message-data-time">10:12 AM, Today</span>
							</div>
							<div class="message my-message">
								Are we meeting today? Project has been already finished and I have results to show you.
							</div>
						</li>
						
					</ul>
					
				</div>
				
				<ChatControl />
				
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(MessagesList);
