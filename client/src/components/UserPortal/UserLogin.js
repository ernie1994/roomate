import React from 'react';
import { Card, CardText, CardBody, Form, FormGroup, Label, Input, FormText, Container, Wrapper, Button } from 'reactstrap';


import API from '../../utils/API';

import axios from "axios";

class UserLogin extends React.Component {

	state = {
		username: "this will not change",
		password: "niether will this"
	}

	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});

	}

	handleFormSubmit = () => {
		// API.createUser({
		// 	username: this.state.username,
		// 	password: this.state.password
		// }).then(function(res){
		// 	console.log(res);
		// })
		API.loginUser({
			username: this.state.username,
			password: this.state.password
		}).then(function (res) {
			axios.get("/api/user").then((data) => {
				console.log("we made it bitch", data);
			})
		})
	}




	render() {
		return (
			<div>
				<Card>
					<CardBody>
						<Form>
							<FormGroup>
								<Label>Username</Label>
								<Input type="text" name="username" onChange={this.handleInputChange} />
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" onChange={this.handleInputChange} />
							</FormGroup>
							<FormText>Don't have an account with us? Sign up for one <a href="/signup">here</a></FormText>
							<Button outline color="success" onClick={this.handleFormSubmit}>Sign In</Button>
							<Button outline color="danger" onClick={this.test}>USER SIGN IN TEST</Button>
						</Form>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default UserLogin;