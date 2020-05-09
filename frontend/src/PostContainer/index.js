import React, { Component } from 'react'
// import { Form, Button, Label, Segment }
import NewPostForm from "../NewPostForm"
import PostList from "../PostList"
export default class PostContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			posts:[]
		}
	}


	componentDidMount(){
		this.getPosts()
	}

	createPost = async (postToAdd)=>{
		console.log("this is the post you are trying to add", postToAdd)
		try{
			const url = process.env.REACT_APP_API_URL + "/api/v1/posts/"
			const createPostResponse = await fetch (url, {
				credentials: "include",
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				}, 
				body: JSON.stringify(postToAdd)
			})
			const createPostJson = await createPostResponse.json()
			console.log("this is the create post json")
			console.log(createPostJson)
			if(createPostResponse.status === 201){
				this.setState({
				posts: [...this.state.posts, createPostJson.data]
				})
			}
		}catch(err){
			console.log(err)
		}
	}
	getPosts = async () =>{
		try{
			const url = process.env.REACT_APP_API_URL + "/api/v1/posts/"
			const postsResponse = await fetch(url, {
				credentials: "include"
			})
			const postJson = await postsResponse.json()

			this.setState({
				posts: postJson.data
			})
		}catch(err){
			console.log(err)
		}

	}

	render(){
		return(
			<React.Fragment>
			<NewPostForm createPost={this.createPost} />
			<PostList posts={this.state.posts}/>
			</React.Fragment>
			)
	}

}