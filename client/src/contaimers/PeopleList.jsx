import React, { Component } from 'react';
import { connect } from 'react-redux'

class PeopleList extends Component {
	render() {
		return (
			<div class="people-list" id="people-list">
				<div class="search">
					<input type="text" placeholder="search" />
					<i class="fa fa-search"></i>
				</div>
				<ul class="list">
					{this.props.peoples.map((el, key) => 
						<li class="clearfix" key={key}>
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
							<div class="about">
								<div class="name">{el}</div>
								<div class="status"><i class="fa fa-circle online"></i> online</div>
							</div>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		peoples: state.peoples
	}
}

export default connect(mapStateToProps)(PeopleList);
