import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function UserSession(props){
	console.log(props)
	console.log("this is the props.sessions.asanas")
	console.log(props.UsersSessions)
	

	const sessions = props.UsersSessions.map(session=>{
		// console.log(session)
		return(
			<Card key={session.id}>
				<Card.Content>
				<Card.Header>
					{session.date}
				</Card.Header>
				<Card.Content>
				</Card.Content>
						
					
				

				<Card.Description>
					Notes: {session.notes} 
					Length: {session.length}
				</Card.Description>
				</Card.Content>
				<Card.Content textAlign={"center"}>
				<Button basic color = 'yellow'
				onClick={()=> props.editSession(session.id)}>Edit</Button>
				<Button basic color = 'red'
				onClick={()=> props.deleteSession(session.id)}>Delete</Button>
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