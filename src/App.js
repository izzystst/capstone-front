import React, { Component } from 'react';
import './App.css';
import LoginRegistrationForm from "./LoginRegistrationForm"
import PostContainer from "./PostContainer"
import Header from "./Header"
export default class App extends Component {
  constructor(){
    super()

    this.state = {
      loggedIn: false,
      loggedInUserEmail: "",
      loggedInUserId: 0,
      renderMap: false,
      renderNewPost: false,
      renderUsersPosts: false,
      renderAllPosts: false,
      renderCommonWords: false,
      renderUser: false,
      renderSearch:false
      

    }
    this.handler = this.handler.bind(this) 
   }
   handler() {
    if(this.state.loggedIn === true){
      this.setState({

        loggedIn: false,
        loggedInUserEmail: "",
        loggedInUserId: 0,
        renderMap: false,
        renderNewPost: false,
        renderUsersPosts: false,
        renderAllPosts: false,
        renderCommonWords: false,
        renderUser: false,
        renderSearch:false,
        message: "you have deleted your account. bye!"
      })
    }else{
      this.setState({
        loggedIn:true
      })
    }
  }
  register = async (registerInfo) =>{
    console.log("register is being called with the following info", registerInfo)
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"

    try {
      const registerResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("registerResponse", registerResponse)
      const registerJson = await registerResponse.json()
      console.log("registerJson", registerJson)

      if(registerResponse.status === 201){
        this.setState({
          loggedIn: true,
          loggedInUserEmail: registerJson.data.email,
          loggedInUserId: registerJson.data.id,
          message: registerJson.message,
          renderNewPost: true,

        })
      }if(registerResponse.status === 401){
        this.setState({
        message: registerJson.message
        })
      }
    }catch(err){
      console.log(this.registerJson.message)
      console.log("error trying to register")
      console.log(err)
    }
  }

  login = async (loginInfo)=>{
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/login"
    try{
      const loginResponse = await fetch(url, {
        credentials: 'include',
        'method': "POST",
        'body': JSON.stringify(loginInfo),
        'headers':{
          'Content-Type':'application/json'
        }
      })
      const loginJson = await loginResponse.json()
      if(loginResponse.status === 200){
        this.setState({
          loggedIn: true,
          loggedInUserEmail: loginJson.data.email,
          loggedInUserId: loginJson.data.id,
          renderNewPost: true,
          message: loginJson.message

        })      
      }

    }catch(err){

      console.log(err)
    }
  }
  logout = async ()=>{
    try{
      const url= process.env.REACT_APP_API_URL + "/api/v1/users/logout"
      const logoutResponse = await fetch(url, {
        credentials: "include"
      })
      const logoutJson = await logoutResponse.json()

      if(logoutResponse.status === 200){
        this.setState({
          loggedIn: false,
          loggedInUserId:"",
          loggedInUserEmail:"",
          renderMap:false,
          renderNewPost: false,
          renderUsersPosts: false,
          renderAllPosts: false,
          renderCommonWords: false,
          renderUser: false,
          message: logoutJson.message
        })
      }
    }catch(err){
      console.log(err)
    }
  }
  
  ShowMap=()=>{
    console.log("show map is being called")
    this.setState({
      renderMap:true,
      renderNewPost: false,
      renderUsersPosts: false,
      renderAllPosts: false,
      renderCommonWords: false,
      renderUser: false,
      renderSearch:false


    })
  }
  newPost=()=>{
    console.log("add post is being called")
    this.setState({
      renderMap:false,
      renderNewPost: true,
      renderUsersPosts: false,
      renderAllPosts: false,
      renderCommonWords: false,
      renderUser: false,
      renderSearch:false

    })
  }
  UsersPost=()=>{
    this.setState({
      renderMap:false,
      renderNewPost: false,
      renderUsersPosts: true,
      renderAllPosts: false,
      renderCommonWords: false,
      renderUser: false,
      renderSearch:false

    })
  }
  allPosts=()=>{
    this.setState({
      renderMap:false,
      renderNewPost: false,
      renderUsersPosts: false,
      renderAllPosts: true,
      renderCommonWords: false,
      renderUser: false,
      renderSearch:false

    })
  }
  userInfo=()=>{
    this.setState({
      renderMap:false,
      renderNewPost: false,
      renderUsersPosts: false,
      renderAllPosts: false,
      renderCommonWords: false,
      renderUser: true,
      renderSearch:false

    })    
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
      console.log(commonJson.data)
      // console.log(commonJson.data.posts_with_common_words)
      this.setState({
        commonPosts: commonJson.data.posts,
        commonWords: commonJson.data.words,
        renderMap:false,
        renderNewPost: false,
        renderUsersPosts: false,
        renderAllPosts: false,
        renderCommonWords: true,
        renderSearch:false

      })

    }catch(err){
      console.log(err)
    }
  }
  search=()=>{
      this.setState({
      renderMap:false,
      renderNewPost: false,
      renderUsersPosts: false,
      renderAllPosts: false,
      renderCommonWords: false,
      renderUser: false,
      renderSearch:true

    })  
  }




  render() {
  return (
    <div className="App">
    {
      this.state.loggedIn
      ?
      <React.Fragment>
      <Header 
        email={this.state.loggedInUserEmail}
        ShowMap={this.ShowMap}
        newPost={this.newPost}
        UsersPost={this.UsersPost}
        allPosts={this.allPosts}
        logout={this.logout}
        userInfo={this.userInfo}
        getCommonWords={this.getCommonWords}
        search={this.search}
      />
      <PostContainer 
        loggedIn={this.state.loggedIn}
        loggedInUserId={this.state.loggedInUserId}
        renderMap={this.state.renderMap}
        renderNewPost={this.state.renderNewPost}
        renderUsersPosts={this.state.renderUsersPosts}
        renderAllPosts={this.state.renderAllPosts}
        renderCommonWords={this.state.renderCommonWords}
        renderUser={this.state.renderUser}
        commonWords = {this.state.commonWords}
        commonPosts= {this.state.commonPosts}
        handler={this.handler}
        renderSearch={this.state.renderSearch}
        flashMessage={this.state.message}
        // deleteAccount = {this.deleteAccount}
        />
      </React.Fragment>
      :
    <LoginRegistrationForm
      register={this.register}
      login={this.login}
      flashMessage={this.state.message}
       />
    }
      
      
    </div>
  )
};
}

