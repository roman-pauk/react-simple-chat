import React, { Component } from 'react';

export default class UserItem extends Component {
	render() {
		return this.props.index == 0 ?
			(<li class="clearfix">
				<img src="https://image.flaticon.com/icons/png/512/306/306473.png" alt="avatar" />
				<div class="about">
					<div class="name">{this.props.name} - you</div>
					<div class="status"><i class="fa fa-circle online"></i> online</div>
				</div>
			</li>) :

			(<li class="clearfix">
				<img src="https://image.flaticon.com/icons/png/512/306/306473.png" alt="avatar" />
				<div class="about">
					<div class="name">{this.props.name}</div>
					<div class="status"><i class="fa fa-circle online"></i> online</div>
				</div>
			</li>);
	}
}
