import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditSessionModal extends Component {
	constructor(props){
		super(props)
		this.state({
			notes: props.sessionToEdit.notes,
			length: props.sessionToEdit.length
		})
	}
		render(){
		const asanas = this.state.asanas.map(asana=> <div key={asana.id}><Form.Input type="checkbox" name={asana.name} id={asana.id.toString()} onChange={this.onCheckChange}/> <label htmlFor={asana.id}>{asana.name}
			</label></div>)
	return(
		
		<Segment>
		<h4>Edit This Session! </h4>
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
			<Label>Asanas</Label>
			<div>
			{asanas}
			</div>
		<Button type='Submit'>Update Session </Button>
		</Form>
		</Segment>


	)

	}
}