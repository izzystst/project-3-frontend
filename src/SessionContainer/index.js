import React, { Component } from 'react'
import { Form, Button, Label, Segment} from 'semantic-ui-react'
import AsanaContainer from '../AsanaContainer'
import NewSessionForm from "../NewSessionForm"
import SessionList from "../SessionList"
export default class SessionContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			sessions:[],
			asanas:[],
			sessionAsanas:[]
		}
	}
	componentDidMount(){
		this.getSessions()
	}
	getSessions= async () =>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/sessions/'
			const sessionResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log(url)
			console.log("here is the fetch call response")
			console.log(sessionResponse)
			const sessionJson = await sessionResponse.json()
			console.log("getsessions in sessions container")
			console.log(sessionJson.data.session)
			console.log(sessionJson['session'])
			this.setState({
				sessions: sessionJson.data.session,
				asanas:sessionJson.data.asanas
				
			})			
		}catch(err){
			console.log('error getting sessions', err)
		}
	}

	createSessionAsanas = async () =>{
		console.log("this is state in createSessionAsanas")
		console.log(this.state.sessions)
		const sessions = this.state.sessions
		console.log(sessions.length)
		console.log(this.state.asanas)
		const asanas = this.state.asanas
		

		for(let i = 0; i < sessions.length; i++){
			console.log(sessions[i].id)
			for(let k = 0; k <asanas.length; k++){
				if(asanas[k].session.id === sessions[i].id){
					console.log(asanas[k], "is a match with", sessions[i])

				}
			}
			// for(let i = 0; i <asanas.length; i++){
			// 	console.log(sessions[i])
		}
	}

	createSession = async(sessionToAdd)=>{
		try{
			console.log("you are calling create session")
			console.log(sessionToAdd)
			const url = process.env.REACT_APP_API_URL +"/api/v1/sessions/"
			console.log(url)
			const createSessionResponse = await fetch(url, {
		        credentials: 'include',
		        method: 'POST',
		        headers: {
		          'Content-Type': 'application/json'
		        },
				body: JSON.stringify(sessionToAdd)
				})
			console.log("this is createSessionResponse")
			console.log(createSessionResponse)
				const createSessionJson = await createSessionResponse.json()
				console.log("this is the session json")
				console.log(createSessionJson)
				this.getSessions()
				const state = this.state
				if(createSessionResponse.status ===201){
					this.setState(state)
				}
			}catch(err){
			console.log("error creating session", err)
		}
	}
	render() {
		console.log(this.state)
		// this.createSessionAsanas()
		return(
			<React.Fragment>
			<h2>SESSIONS CONTAINER</h2>
			<NewSessionForm createSession={this.createSession} />
			<SessionList 
				sessions={this.state.sessions}
				asanas={this.state.asanas}
			/>
			</React.Fragment>
		)
	}
}