import React, { Component } from 'react'
import { Form, Button, Label, Segment, Modal, Header } from 'semantic-ui-react'
import '../index.css'

export default class EditSessionModal extends Component {
	constructor(props){
		console.log("this is props sessionToEdit.asanas")
		console.log(props.sessionToEdit['asanas'])
		super(props)
		this.state={
			notes: props.sessionToEdit.notes,
			length: props.sessionToEdit.length,
			asanas: props.sessionToEdit['asanas']
		}
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) =>{
		event.preventDefault()
		console.log("this is state in submt")
		console.log(this.state)
		this.props.updateSession(this.state)
	}
		render(){
		// const asanas = this.state.asanas.map(asana=> <div key={asana.id}><Form.Input type="checkbox" name={asana.name} id={asana.id.toString()} onChange={this.onCheckChange}/> <label htmlFor={asana.id}>{asana.name}
			// </label></div>)
	return(
		
		<Modal open={true} closeIcon={true} onClose={this.props.closeModal}> 
		<Header>
		<h4>Edit This Session! </h4>
		</Header>
		<Modal.Content>
		<Form onSubmit={this.handleSubmit}>
			<Label>Notes:</Label>
			<Form.Input
				type="text"
				name="notes"
				value={this.state.notes}
				placeholder="How did this go?"
				onChange={this.handleChange}
			/>
			<Label>Length</Label>
			<Form.Input
				type='text'
				name="length"
				value={this.state.length}
				placeholder="How long did you practice for?"
				onChange={this.handleChange}
			/>
		<Modal.Actions>
		<Button type='Submit'>Update Session </Button>
		</Modal.Actions>
		</Form>
		</Modal.Content>
		</Modal>
		


	)

	}
}