import React, { Component } from 'react'
import { Form, Button, Label, Segment} from 'semantic-ui-react'
import NewSessionForm from "../NewSessionForm"
export default class DogContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			sessions:[],
			idOfSessionToEdit:-1,
		}
	}
	componentDidMount(){
		this.getSessions()
	}
	getSessions= async () =>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/sessions'
			const sessionResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log(url)
			console.log("here is the fetch call response")
			console.log(sessionResponse)
			const sessionJson = await sessionResponse.json()
			console.log("getsessions in sessions container")
			this.setState({
				sessions: sessionJson.data
			})
		}catch(err){
			console.log('error getting sessions', err)
		}
	}
	createSession = async(sessionToAdd)=>{
		try{
			console.log("you are calling create session")
			const url = process.env.REACT_APP_API_URL +"/api/v1/sessions"
			const createSessionResponse = await fetch(url, {
				credentials: 'include',
				method:"POST",
				headers:{ "Content-Type": 'application/json'},
				body: JSON.stringify(sessionToAdd)
				})
				const createSessionJson = await createSessionResponse.json()
				console.log("this is the session json")
				console.log(createSessionJson)
				this.getSessions()
				const state = this.state
				if(createSessionResponse.status ===201){
					this.setState(state)
				}
			}catch(err){
			console.log(err)
		}
	}
	render() {
		return(
			<React.Fragment>
			<h2>SESSIONS CONTAINER</h2>
			<NewSessionForm createSession={this.createSession} />
			</React.Fragment>
		)
	}
}