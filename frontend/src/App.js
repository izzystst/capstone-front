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
      renderMap:false
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
          loggedInUserId: registerJson.data.id
        })
      }
    }catch(err){
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
          loggedInUserId: loginJson.data.id
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
          loggedInUserEmail:""
        })
      }
    }catch(err){
      console.log(err)
    }
  }
  ShowMap=()=>{
    this.setState({
      renderMap: true
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
      />
      <PostContainer 
        loggedInUserId={this.state.loggedInUserId}/>
      </React.Fragment>
      :
    <LoginRegistrationForm
      register={this.register}
      login={this.login}
       />
    }
      
      
    </div>
  )
};
}

