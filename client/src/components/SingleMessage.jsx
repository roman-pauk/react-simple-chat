import React, { Component } from 'react';

export default class SingleMessage extends Component {
	render() {
		const time = new Date(this.props.time);
		if (this.props.currentID === this.props.userID) {
			return (
				<li>
					<div class="message-data">
						<span class="message-data-name"><i class="fa fa-circle online"></i> me</span>
						<span class="message-data-time">{time.getHours()}:{time.getMinutes()} {time.getHours() > 12 ? 'PM' : 'AM'}</span>
					</div>
					<div class="message my-message">
						{this.props.text}
					</div>
				</li>
			)
		}
		return (
			<li class="clearfix">
				<div class="message-data align-right">
					<span class="message-data-time">{time.getHours()}:{time.getMinutes()} {time.getHours() > 12 ? 'PM' : 'AM'}</span> &nbsp; &nbsp;
					<span class="message-data-name" >{this.props.author}</span> <i class="fa fa-circle me"></i>
				</div>
				<div class="message other-message float-right">
					{this.props.text}
				</div>
			</li>
		);
	}
}
