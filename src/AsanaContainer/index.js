// import React, { Component } from 'react'
// import { Form, Button, Label, Segment} from 'semantic-ui-react'

// export default class AsanaContainer extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			asanas: []
// 		}
// 	}
// 	componentDidMount() {
// 		this.getAsanas()




// 	getAsanas = async () =>{
// 		try{
// 			const url = process.env.REACT_APP_API_URL + '/api/v1/asanas'
// 			const asanasResponse = await fetch(url, {
// 				credentials: 'include'
// 			})
// 			const asanasJson = await asanasResponse.json()
// 			console.log(asanasJson)
// 			this.setState({
// 				asanas: asanasJson.data
// 			})
// 		}catch(err){
// 			console.log(err)
// 		}
// 	}
// 	}
// }