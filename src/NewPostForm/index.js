import React, { Component } from 'react'
import { Form, Label, Segment } from 'semantic-ui-react'
import FlashMassage from 'react-flash-message';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';


export default class NewPostForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			text: "",
			Latitude:"",
			Longitude:"",
			image:"",
			maxSring:""
		}
	}
	componentDidMount(){
		this.geoFindMe()
	}
	handleChange = (event) =>{

		console.log("handleChange")
		const wordCount = (str) =>{
			const numWords = str.split(" ").length
			this.setState({
				numWords: numWords
			})
		}
		this.setState({
			text: event.target.value
		})
		if(this.state.numWords === 200){
			console.log("it is over 10 words npow")
			const max = event.target.value.length.toString()
			console.log(max)
			this.setState({
				maxString: max
		})
		}else{
		this.setState({
				maxString: "10000"
		})
	}

	
		wordCount(this.state.text)
	// 	if(numWords === 200){
	// 		const max = this.state.text.length
	// 		const maxSring = max.toString()
	// 		this.setState({
	// 			maxChar: maxSring
	// 		})	
	// }
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
// 	Message = () => (
// 	<React.Component>
//  	 <FlashMessage duration={5000}>
//    	 <strong>{this.props.flashMessage}</strong>
//   		</FlashMessage>
//  	 </React.Component>
// )
	render(){
		return(
			<Segment id="today">
			<div className="today">
			<div>
			<FlashMassage duration={5000} persistOnHover={true}>
  			<p>{this.props.flashMessage}</p>
			</FlashMassage>
			</div>
			</div>
			{this.props.postedToday === true
			&&
			<div className="today">
			you've already posted today!


			</div>

			}{
				this.props.postedToday === false
				&&
			<div id="today">
			<h4>Today's Post</h4>

			<Form onSubmit={this.handleSubmit}>
				<Form.Input
				 // id="standard-basic" label="How was your day:"

					id="textarea"
					type="textarea"
					name="text"
					value={this.state.text}
					placeholder="How was today?"
					onChange={this.handleChange}
					// max length is in characrtors (look into avergaes)
				
					maxLength= {this.state.maxString}

					
					// height="200p"
					required
				/>
				<p>Words:{this.state.numWords}/200</p>

				 <Form.Input 
				 	type="file" 
				 	name="image"
				 	onChange={this.fileChange}/>

			<Button id="button" type="submit">Post</Button>
			</Form>
			</div>
		}
			</Segment>
			)
	}
}