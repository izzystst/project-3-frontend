import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function SessionList(props){
	console.log(props)
	console.log("this is the props.sessions.asanas")
	console.log(props.sessions)
	console.log(props.sessions.asanas)
	const propSess = props.sessions
	for(let i = 0; i < propSess.length; i++){
		console.log(propSess[i].asanas)
	}
	const sessions = props.sessions.map(session=>{
		const asanas = session.asanas.map(asana=><Card.Meta key={asana.id}>{asana.name}</Card.Meta>)
		// console.log(session)
		return(
			<Card key={session.id}>
				<Card.Content>
				<Card.Header>
					{session.date}
				</Card.Header>
				<Card.Content>
				{asanas}
				</Card.Content>
						
					
				

				<Card.Description>
					Notes: {session.notes} 
					Length: {session.length}
				</Card.Description>
				</Card.Content>
				<Card.Content textAlign={"center"}>
				<Button basic color = 'red'
				onClick={()=> props.editSession(session.id)}>Edit</Button>
				</Card.Content>
				</Card>
			)
		}
	)
	return(
		<Card.Group centered={true}>
			{sessions}
		</Card.Group>
		)
}