import React, { Component } from 'react'
import { Input, Search, Label, Segment } from 'semantic-ui-react'


export default class SearchPosts extends Component {

	constructor(props){
		super(props)
		this.state = {
			test: "test"

		}
	}
	// componentDidMount=()=>{
	// 	console.log("hello")
	// }

	render(){
		console.log("is this working?!?!??!!?")
	return(
		<React.Fragment>
	  	<Input loading icon='user' iconPosition='left' placeholder='Search...' />

		<p>SEARCH HERE</p>
		</React.Fragment>
		)
	}
}