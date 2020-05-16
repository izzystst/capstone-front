import React, { Component } from 'react'
import { Input, Search, Label, Segment } from 'semantic-ui-react'


export default class SearchPosts extends Component {

	constructor(props){
		super(props)
		this.state = {
			test: "test"

		}
	}
	handleChange=(event)=>{
		console.log("this is the event")
		console.log(event.target.value)
		this.setState({
			query: event.target.value
		})

	}
	// componentDidMount=()=>{
	// 	console.log("hello")
	// }

	render(){
		console.log("is this working?!?!??!!?")
	return(
		<React.Fragment>
	  	<Input onChange={this.handleChange} placeholder='Search...' />

		<p>SEARCH HERE</p>
		</React.Fragment>
		)
	}
}