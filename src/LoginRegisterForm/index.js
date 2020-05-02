import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {
	constructor(){
		super()
		this.state={
			email: "",
			password:"",
			username:"",
			zipcode:"",
			action:"Login"
		}


	}
	switchForm = () =>{
		if(this.state.action === "Login"){
			this.setState({action: "Register"})
		}else{
			this.setState({action:"Login"})
		}

	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit=(event)=>{
		event.preventDefault()
		if(this.state.action==="Register"){
			this.props.register(this.state)

		}else{
			this.props.login(this.state)
		}
	
		this.setState({
			email: "",
			password:"",
			username:"",
			zipcode:"",
			action:"Login"
	})
	}
	
	render(){
		return(
			<React.Fragment>
			<h2>{this.state.action} here</h2>
				<Form onSubmit={this.handleSubmit} >
					{
					this.state.action === "Register"
					&&
					<React.Fragment>
						<Label>Username:</Label>
						<Form.Input 
							type="text"
							name="username"
							placeholder="Enter a username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					<Label>ZipCode:</Label>
					<Form.Input
						type="text"
						name="zipcode"
						placeholder="enter your zipcode"
						value={this.state.zipcode}
						onChange={this.handleChange}
					/>            
					</React.Fragment>
					}
				
					<Label>Email:</Label>
					<Form.Input
						type="email"
						name="email"
						placeholder="enter your email"
						value={this.state.email}
						onChange={this.handleChange}

					/>
					<Label>Password:</Label>
					<Form.Input
						type="password"
						name="password"
						placeholder="enter a password"
						value={this.state.password}
						onChange={this.handleChange}						
					/>

					<Button  type='Submit'>{this.state.action === 'Login'? "Log in" : "Sign Up" }</Button>
				</Form>
				{
					this.state.action === "Login"
					?
					<p>Need an account? Sign up <span className="fake-link" onClick={this.switchForm}>here</span></p>
					:
		            <p>Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.</p>
				}
			</React.Fragment>



		)
	}

}