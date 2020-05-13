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
			console.log(commonJson.data.common_words)
			console.log(commonJson.data.posts_with_common_words)
			this.setState({
				words: commonJson.data.common_words,
				posts: commonJson.data.posts_with_common_words
			})

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