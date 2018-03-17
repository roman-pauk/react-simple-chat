import React, { Component } from 'react';
import ws from 'utils/ws'

export default class ChatControl extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: ''
		}

		this.handleMsgSend = this.handleMsgSend.bind(this)
	}
	handleMsgSend() {
		if(this.state.msg.trim().length > 0) {
			ws.emit(this.state.msg)
			this.setState({msg: ''})
		}
	}
	render() {
		return (
			<div class="chat-message clearfix">
				<textarea name="message-to-send" id="message-to-send" value={this.state.msg} onChange={e => this.setState({msg: e.target.value})} placeholder ="Type your message" rows="3"></textarea>
				<i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
				<i class="fa fa-file-image-o"></i>
				<button onClick={this.handleMsgSend}>Send</button>
			</div>
		);
	}
}
