import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';



import API from '../../utils/API';

import axios from "axios";

class UserLogin extends React.Component {

	state = {
		username: "this will not change",
		password: "niether will this",
		isLoggedIn: false
	}

	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});

	}

	handleFormSubmit = event => {
		event.preventDefault();
		API.loginUser({
			username: this.state.username,
			password: this.state.password
		}).then(function (res) {
			axios.get("/api/user").then((data) => {
				console.log("we made it bitch", data);
			})
		}).then(() => {
			this.setState({ isLoggedIn: true });
		})
	}




	render() {
		return (

			<div>
				{this.state.isLoggedIn ? <Redirect to='/' />

					:

					<Card>
						<CardBody>
							<Form onSubmit={this.handleFormSubmit}>
								<FormGroup>
									<Label>Username</Label>
									<Input type="text" name="username" onChange={this.handleInputChange} />
								</FormGroup>
								<FormGroup>
									<Label>Password</Label>
									<Input type="password" name="password" onChange={this.handleInputChange} />
								</FormGroup>
								<FormText>Don't have an account with us? Sign up for one <a href="/signup">here</a></FormText>
								<Button outline color="success">Sign In</Button>
								{/* <Button outline color="danger" onClick={this.test}>USER SIGN IN TEST</Button> */}
							</Form>
						</CardBody>
					</Card>
				}
			</div>
		)
	}
}

export default UserLogin;