import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import FlashMassage from 'react-flash-message';

import "../index.css"

export default class LoginRegisterForm extends Component {

	constructor(){
		super()

		this.state= {

			email: "",
			password: "",
			username: "",
			zipcode:"",
			DOB: "",
			action: "Login"
		}
	}
	switchForm = () =>{
		if(this.state.action === "Login"){
			this.setState({action:"Register"})
		}else{
			this.setState({action:"Login"
			})
		}
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit=(event)=>{
		event.preventDefault()
		if(this.state.action ==="Register"){
			this.props.register(this.state)
		}else{
			this.props.login(this.state)
		}
		this.setState({
			email: "",
			password: "",
			username: "",
			zipcode:"",
			DOB: "",
			action: "Login"			
		})
	}
	// flashMessage={this.props.flashMessage}
	render(){
		return(
			<React.Fragment>
			<div>
			<FlashMassage duration={5000} persistOnHover={true}>
  			<p>{this.props.flashMessage}</p>
			</FlashMassage>
			</div>
			<h1>73k</h1>
			<h2>{this.state.action} Form </h2>
				<Form onSubmit={this.handleSubmit}>
					{
						this.state.action === "Register"
						&&
						<React.Fragment>
							<div>
							<Label id="form-label">Username:</Label>
							</div>
							<Form.Input
								type="text"
								name="username"
								placeholder="enter a username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<Label id="form-label">Zipcode:</Label>
							<Form.Input
								type="text"
								name="zipcode"
								placeholder="please leave your zipcode/postal code"
								value={this.state.zipcode}
								onChange={this.handleChange}
							/>
							<Label id="form-label">Date of Birth:</Label>
							<Form.Input
								type="date"
								name="DOB"
								placeholder="when were you born?"
								value={this.state.DOB}
								onChange={this.handleChange}
							/>
						</React.Fragment>
					}
					<Label id="form-label">Email:</Label>
				
					<Form.Input
						type="email"
						name="email"
						placeholder="enter you email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<Label id="form-label">Password</Label>
					<Form.Input
						type="password"
						name="password"
						placeholder="pick a password"
						value={this.state.password}
						onChange={this.handleChange}
					/>	

					<Button id="button" type='Submit'>{this.state.action === 'Login'? "Log In" : "Sign Up"}</Button>
					</Form>
					{
						this.state.action === 'Login'
						?
						<p>Register <span onClick={this.switchForm}>here</span></p>
						:
						<p>Login <span onClick={this.switchForm}>here</span></p>

					}
				</React.Fragment>


					

			)
	}
}