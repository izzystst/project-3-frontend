import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function SessionList(props){
	console.log(props)
	console.log("these are the asana porps")
	console.log(props.asanas)
	const asanas = props.asanas
	console.log(asanas)
	const asanasSession = []
	const sessions = props.sessions.map(session=>{

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