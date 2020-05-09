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
	componentDidMount(){
		this.geoFindMe()
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
	geoFindMe= async ()=> {

		console.log("calling geo find me")

  		 	const success = async (position)=> {
  			console.log("it was a success")
    		const latitude  = position.coords.latitude;
    		const longitude = position.coords.longitude;
    		
    		this.setState({
    			Latitude: latitude,
    			Longitude: longitude
    		})
  }

			const error= async () =>{
				console.log("error")
			}

			if(!navigator.geolocation) {
				console.log("err")
			} else {
			navigator.geolocation.getCurrentPosition(success, error);
			}
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