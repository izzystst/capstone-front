import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewPostForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			text: "",
			Latitude:"",
			Longitude:"",
			image:""
		}
	}
	handleChange = (event) =>{
		// console.log(event)
		
		  
		//    console.log(document.getElementById('startLat').innerHTML = startPos.coords.latitude
		//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
		//   };
		//   navigator.geolocation.getCurrentPosition(geoSuccess);
		// };
		// console.log(geoSuccess)
		this.setState({
			text: event.target.value
		})
	}
	handleSubmit = (event)=>{
		event.preventDefault()
		this.props.createPost(this.state)
	}
	render(){
		return(
			<Segment>
			<h4>Today's Post</h4>
			<Form onSubmit={this.handleSubmit}>
				<Form.Input
					type="text-area"
					name="text"
					value={this.state.text}
					placeholder="How was today?"
					onChange={this.handleChange}
				/>
			<Button type="Submit">Post</Button>
			</Form>
			</Segment>
			)
	}
}