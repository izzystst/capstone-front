import React, { Component } from 'react'
import LoginRegistrationForm from "../LoginRegistrationForm"
export default class UserAdmin extends Component {
	constructor(props){
	super(props)

}
	deleteAccount = async (idOfUserToDelete) =>{
		const url = process.env.REACT_APP_API_URL + "/api/v1/users/" + idOfUserToDelete
		console.log(url)
		try{
			const deleteUserResponse = await fetch(url, {
				credentials: 'include', 
				method: 'DELETE'
			})
			const deleteUserResponseJson = await deleteUserResponse.json()
			this.props.handler()
		}catch(err){
			console.log(err)
		}



	}

	render(){
		console.log(this.props)
		return(
		<React.Fragment>

			<div>
			Would you like to delete your account and all of your posts?
			<div>
			<button onClick={()=>this.deleteAccount(this.props.loggedInUserId)}> Yes, please delete all of my memories </button>
			</div>
			</div>
		
		</React.Fragment>	
			)
	}
	}







