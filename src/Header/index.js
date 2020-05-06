import React from 'react'
import '../index.css'

export default function Header(props){
	const headerStyle = {
		textAlign: "right",
		padding: "10px",
		backgroundColor: "#DDDDDD"
	}

	return(

		<nav style={headerStyle}>
			<span className='fake-link' onClick={props.showSessionAdd}> Add a Session</span>
			<span className='fake-link' onClick={props.showAsanaList}> See All Asanas</span>
			<span className='fake-link' onClick={props.showSessionList}> See All Sessions</span>
			<p>Logged in as {props.email}.&nbsp;
				<span className='fake-link' onClick={props.logout}> Log Out </span>

			</p>
		</nav>
	)
}