import React, { Component } from 'react';

export default class SingleMessage extends Component {
	render() {
		const time = new Date(this.props.time);
		return (
			<li class="clearfix">
				<div class="message-data align-right">
					<span class="message-data-time" >{time.getHours()}:{time.getMinutes()} {time.getHours() > 12 ? 'PM' : 'AM'}</span> &nbsp; &nbsp;
					<span class="message-data-name" >{this.props.author}</span> <i class="fa fa-circle me"></i>
				</div>
				<div class="message other-message float-right" style={{background: this.props.color}}>
					{this.props.text}
				</div>
			</li>
		);
	}
}
