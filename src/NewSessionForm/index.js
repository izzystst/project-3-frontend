import React, { Component } from 'react'
import {Form, Button, Label, Segment, Modal, Header } from 'semantic-ui-react'

export default class NewSessionForm extends Component {
	constructor(props){
		super(props)
		this.state={
			length:"",
			notes:"",
			asana:[],
			asanas:[]
		}
	}
	componentDidMount = ()=>{
		this.getAsanas()
	}
	getAsanas = async () =>{
	try{
		const url = process.env.REACT_APP_API_URL + '/api/v1/asanas/'
		const asanasResponse = await fetch(url, {
			credentials: 'include'
		})
		const asanasJson = await asanasResponse.json()
		console.log("this is the asanas json")
		console.log(asanasJson)
		this.setState({
			asanas: asanasJson.data
		})
	}catch(err){
		console.log(err)
	}
}
	onCheckChange= (event) =>{
		console.log(event.target.id)
		const asana = this.state.asana
		//if the event.target.id exists in the asana state then remove it (splice_), if not add it)
		if(asana.includes(event.target.id)===true){
			for( let i = 0; i < asana.length; i++){
				if(asana[i]===event.target.id){
					console.log(asana[i])
					asana.splice(i, 1)
				}
			}
		}else{
			asana.push(event.target.id)
		}
		console.log("this is the asana state in the chekc on change")
		console.log(asana)
		this.setState({
			asana: asana
		})
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
		const dataToSend = {length: this.state.length, notes: this.state.notes, asana: this.state.asana}
		console.log("this is state after delete")
		console.log(dataToSend)
		this.props.createSession(dataToSend)
		this.setState({
			length:"",
			notes:"",
			asana:[]
		})
	}
// 	getAsanas = async () =>{
// 	try{
// 		const url = process.env.REACT_APP_API_URL + '/api/v1/asanas/'
// 		const asanasResponse = await fetch(url, {
// 			credentials: 'include'
// 		})
// 		const asanasJson = await asanasResponse.json()
// 		console.log("this is the asanas json")
// 		console.log(asanasJson)
// 		this.setState({
// 			asanas: asanasJson.data
// 		})
// 	}catch(err){
// 		console.log(err)
// 	}
// }

	render(){
		const asanas = this.state.asanas.map(asana=> <div key={asana.id}><Form.Input type="checkbox" name={asana.name} id={asana.id.toString()} onChange={this.onCheckChange}/> <label htmlFor={asana.id}>{asana.name}
			</label></div>)
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
			<Label>Asanas</Label>
			<div>
			{asanas}
			</div>
		<Button type='Submit'>Create Session </Button>
		</Form>
		</Segment>


	)

	}
}