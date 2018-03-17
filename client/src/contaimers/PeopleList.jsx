import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserItem from 'components/UserItem.jsx'
import PeopleSearch from 'components/PeopleSearch.jsx'

class PeopleList extends Component {
	render() {
		return (
			<div class="people-list" id="people-list">
				<PeopleSearch />
				<ul class="list">
					{this.props.peoples.map((el, key) => 
						<UserItem key={el.id} name={el.name} index={key} />
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
