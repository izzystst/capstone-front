import React, { Component } from 'react'
export default class CommonWordsList extends Component {
	constructor(){
		super()

		this.state ={
			words: [],
			posts:[]

		}

	}
		async componentDidMount() {
			await this.getCommonWords()
		}
	getCommonWords= async () =>{
		try{
			const url = process.env.REACT_APP_API_URL + "/api/v1/posts/common"
			console.log(url)
			const commonResponse = await fetch(url, {
				credentials: "include"
			})
			const commonJson = await commonResponse.json()
			console.log("this is the common json")
			console.log(commonJson)


		}catch(err){
			console.log(err)
		}


	}




	render(){
		return(
			<React.Fragment>
			CommonWords
			</React.Fragment>
			)
	}



}