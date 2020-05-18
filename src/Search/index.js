import React, { Component } from 'react'
import { Input, Search, Label, Segment, Button, Form } from 'semantic-ui-react'


export default class SearchPosts extends Component {

	constructor(props){
		super(props)
		this.state = {
			

		}
	}
	handleChange=(event)=>{
		console.log("this is the event")
		console.log(event.target.value)
		this.setState({
			query: event.target.value

		})

	}
	handleSubmit = (event)=>{
		event.preventDefault()
		console.log("this is veing called")
		this.getSearchResults(this.state.query)
			


		}
	
	getSearchResults=async (query)=>{
		console.log("this is being called")
		const url = process.env.REACT_APP_API_URL + "/api/v1/posts/search/" + query
		const searchResponse = await fetch(url, {
			credentials: "include"
		})
		const searchJson = await searchResponse.json()
		console.log("this is the search json")
		console.log(searchJson.data)
		console.log("this is the data")
		if(searchJson.data[query].length === 0){
			this.setState({
			results: "sorry, no one has talked about this yet!"
		})
		}else{
		this.setState({
			results: searchJson.data[query]
		})
	}
		console.log(searchJson.data[query].length)

	}
	// componentDidMount=()=>{
	// 	console.log("hello")
	// }

	render(){
		console.log("is this working?!?!??!!?")
	return(
		<React.Fragment>
		<Form onSubmit={this.handleSubmit}>
	  	<Input  onChange={this.handleChange} placeholder='Search...' />
	  	<Button id="button" type="submit">Search!</Button>
	  	</Form>
	  	{this.state.results
	  	&&
	  	<div className="search">
	  	<h1 className="query">{this.state.query}</h1>
	  	<li className="sentence"> {this.state.results}</li>
	  	</div>
	  	}
		</React.Fragment>
		)
	}
}