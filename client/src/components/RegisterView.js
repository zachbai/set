import React, { Component } from 'react';
import classNames from 'classnames';

class RegisterView extends Component {
	constructor(props) {
		super();
		this.state = { value: '' };
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<div className={classNames("register-container")}>
				<input type="text" placeholder="enter a nickname" onChange={this.handleChange.bind(this)}/>
				<input type="submit" value="Submit" onClick={() => this.props.onSubmit(this.state.value)}/>
			</div>
		);
	}
}

export default RegisterView;