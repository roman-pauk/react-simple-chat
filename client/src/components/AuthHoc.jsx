import React, { Component } from 'react';
//websocket
import ws from 'utils/ws'


export default (ChildComponent) => {
	return class AuthHoc extends Component {
		auth() {
			if (localStorage.getItem('auth')) {
				return true;
			}
			let name = prompt('Enter your name (minimum 2 chars): ');
			if (!name || name.trim().length < 2){
				return false;
			}
			localStorage.setItem('auth', name)
			ws.emit(name);
			return true;
		}
		Noname() {
			return (
				<div className="noName">
					<p>You did not enter correct name! Please try again</p>
					<button onClick={() => location.reload()}>Try Again?</button>
				</div>
			)
		}
		render() {
			return (!this.auth() ?	this.Noname() : <ChildComponent/>)
		}
	}
}
