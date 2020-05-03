import React, { Component } from 'react'
import {Form, Button, Label, Segment, Modal, Header } from 'semantic-ui-react'

export default class NewSessionForm extends Component {
	constructor(props){
		super(props)
		this.state={
			length:"",
			notes:"",
			asana:"1"
		}
	}
	handleChange = (event)=>{
		console.log(event.taget)
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event)=>{
		event.preventDefault()
		console.log(this.state)
		this.props.createSession(this.state)
		this.setState({
			length:"",
			notes:""
		})
	}
	render(){
	return(
		
		<Segment>
		<h4>Add new session</h4>
		<Form onSubmit={this.handleSubmit}>
			<Label>Notes:</Label>
			<Form.Input
				type="text"
				name="notes"
				value={this.state.name}
				placeholder="How did this go?"
				onChange={this.handleChange}
			/>
			<Label>Length</Label>
			<Form.Input
				type='text'
				name="length"
				value={this.state.value}
				placeholder="How long did you practice for?"
				onChange={this.handleChange}
			/>
		<Button type='Submit'>Create Session </Button>
		</Form>
		</Segment>


	)

	}
}