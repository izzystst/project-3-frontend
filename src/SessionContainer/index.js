import React, { Component } from 'react'
import { Form, Button, Label, Segment} from 'semantic-ui-react'
// import AsanaContainer from '../AsanaContainer'
import NewSessionForm from "../NewSessionForm"
import SessionList from "../SessionList"
import EditSessionModal from "../EditSessionModal"
export default class SessionContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			sessions:[],
			idOfSessionToEdit: -1

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
			// console.log(url)
			console.log("here is the fetch call response")
			console.log(sessionResponse)
			const sessionJson = await sessionResponse.json()
			console.log("getsessions in sessions container")
			console.log(sessionJson)
			this.setState({
				sessions: sessionJson.data
			})				
						
		}catch(err){
			console.log('error getting sessions', err)
		}
	}


	createSession = async(state)=>{
		try{
			console.log("you are calling create session")
			console.log(state)
			const url = process.env.REACT_APP_API_URL +"/api/v1/sessions/"
			console.log(url)
			const createSessionResponse = await fetch(url, {
		        credentials: 'include',
		        method: 'POST',
		        headers: {
		          'Content-Type': 'application/json'
		        },
				body: JSON.stringify(state)
				})
			console.log("this is createSessionResponse")
			console.log(createSessionResponse)
				const createSessionJson = await createSessionResponse.json()
				console.log("this is the session json")
				console.log(createSessionJson)
				this.getSessions()

				if(createSessionResponse.status ===201){
				const sessions = this.state.sessions
				sessions.push(createSessionJson.data)
					this.setState({
						sessions: sessions })
				}
			}catch(err){
			console.log("error creating session", err)
		}
	}
	editSession=(idOfSessionToEdit)=>{
		this.setState({
			idOfSessionToEdit: idOfSessionToEdit
		})
	}

	updateSession = async(updatedSessionInfo)=>{
		const url = process.env.REACT_APP_API_URL + "/api/v1/sessions" + this.state.idOfSessionToEdit
		try{
			const updateSessionResponse = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(updatedSessionInfo),
				headers: {"Content-Type": "application/json"}

			})
			const updateSessionJson = await updateSessionResponse.json()
			if(updateSessionResponse.status===200){
				const sessions = this.state.sessions
				const indexdOfSessionBeingUpdated = sessions.findIndex(session => session.id == this.state.idOfSessionToEdit)
				sessions[indexdOfSessionBeingUpdated] = updateSessionJson.data
				this.setState({
					sessions: sessions,
					idOfSessionToEdit: -1
				})
			}
		}catch(err){
			console.log(err)
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
				editSession={this.editSession}
			/>
			{this.state.idOfSessionToEdit !== -1
				&&
			<EditSessionModal
				sessionToEdit={this.state.sessions.find((session)=> session.id===this.state.idOfSessionToEdit)}
				updateSession={this.updateSession}
			/>

			}
			</React.Fragment>
		)
	}
}