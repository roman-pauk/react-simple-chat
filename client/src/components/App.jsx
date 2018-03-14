import React, { Component } from 'react';
import ChatWrap from './ChatWrap.jsx';

import { hot } from 'react-hot-loader'

import store from 'store/index'

import { Provider } from 'react-redux'

class Chat extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<div class="container clearfix">
					<ChatWrap />
				</div>
			</Provider>
		);
	}
}

export default hot(module)(Chat);
