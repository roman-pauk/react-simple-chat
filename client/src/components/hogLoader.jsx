import React, { Component } from 'react'

export default (propName) => (imgPath) => (ChildComponent) => {
	return class HocLoader extends Component {
		constructor(props) {
			super(props);
		}
		isPropEmpty() {
			const prop = this.props[propName];
			if (!prop || (prop.hasOwnProperty('length') && !prop.length) || !Object.keys(prop).length) {
				return true;
			}
			return false;
		}
		render() {
			if(this.isPropEmpty()) {
				return (
					<div style={{textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.4)'}}><img src={imgPath} alt="preloader"/></div>
				)
			}
			return (<ChildComponent {...this.props} />)
		}
	}
}