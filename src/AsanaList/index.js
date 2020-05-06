import React, { Component } from 'react'
import { Card, Form, Button, Label, Segment} from 'semantic-ui-react'

export default function AsanaContainer(props){
	console.log(props.asanas)

	const asanas = props.asanas.map(asana=>{
		return(
			<Card key={asana.id}>
				<Card.Content>
				<Card.Header>
					{asana.name}
				</Card.Header>
				</Card.Content>
			</Card>


			)
	}
)

	return(
		<Card.Group centered={true}>

			{asanas}
		</Card.Group>
		)
}	

