import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewPostForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			text: "",
			Latitude:"",
			Longitude:"",
			image:"",
			value:""
		}
	}
	componentDidMount(){
		this.geoFindMe()
	}
	handleChange = (event) =>{
		console.log(event.target.length)
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

	fileChange = async (event) =>{
		const files = event.target.files
		const data = new FormData()
		const url = "https://api.cloudinary.com/v1_1/doxfaebhn/image/upload"
		data.append('file', files[0])
		data.append('upload_preset', 'qxwmxysi')
		console.log("this is the data")
		console.log(data)
		const upoladImageResponse = await fetch(url, {
			method: 'POST',
			body: data
		})
		const file = await upoladImageResponse.json()
		this.setState({
			image: file.secure_url
		})
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		this.props.createPost(this.state)
		this.setState({

			text: "",
			image:""
		})
	}

	render(){
		return(
			<Segment>
			<h3>{this.props.flashMessage}</h3>
			<h4>Today's Post</h4>
			{this.props.postedToday === true
			&&
			<div>
			you've already posted today!
			</div>
			}{
				this.props.postedToday === false
				&&
			
			<Form onSubmit={this.handleSubmit}>
				<Form.Input
					id="textarea"
					type="textarea"
					name="text"
					value={this.state.text}
					placeholder="How was today?"
					onChange={this.handleChange}
					// max length is in characrtors (look into avergaes)
					maxLength="200"
					// height="200p"
					required
				/>
				<p>Characters Left:{this.state.text.length}/200</p>

				 <Form.Input 
				 	type="file" 
				 	name="image"
				 	onChange={this.fileChange}/>

			<Button type="Submit">Post</Button>
			</Form>
		}
			</Segment>
			)
	}
}