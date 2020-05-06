import React, { Component } from 'react';
import './App.css';
import LoginRegisterForm from "./LoginRegisterForm"
import SessionContainer from "./SessionContainer"
import Header from './Header'
export default class App extends Component{
  constructor(){
    super()
    this.state={
      loggedIn:false,
      loggedInUserEmail: '',
      renderSessionList: true,
      renderAsanaList: false,
      renderSessionAdd: false

    }
  }

  register = async (registration)=>{
    const url = process.env.REACT_APP_API_URL +"/api/v1/users/register"
    console.log(url)
    try{
      const registerResponse = await fetch(url, {
        credentials:'include',
        'method': "POST",
        'body': JSON.stringify(registration),
        "headers":{
          "Content-Type": 'application/json'
        }
      })
      const registerJson = await registerResponse.json()
      if(registerResponse.status === 201){
        this.setState({
          loggedIn: true,
          loggedInUserEmail: registerJson.data.email
        })
      }
    }catch(err){
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
      if(loginResponse.status ===200){
        this.setState({
          loggedIn: true,
          loggedInUserEmail: loginJson.data.email
        })
      }
    }catch(err){
      console.log(err)
    }
  }
  logout = async()=>{
    try{
      const url= process.env.REACT_APP_API_URL + "/api/v1/users/logout"
      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      const logoutJson = await logoutResponse.json()
      if(logoutResponse.status === 200){
        this.setState({
          loggedIn: false,
          loggedInUserEmail:'',

        })
      }
    }catch(err){
      console.log(err)
    }
  }
  showSessionAdd=()=>{
      console.log("session add has been clicked")
      this.setState({
        renderSessionAdd: true,
        renderSessionList: false,
        renderAsanaList: false
      })
  }
  showAsanaList=()=>{
    console.log("asana list will now be rendered ")
    this.setState({
      renderSessionAdd: false,
      renderSessionList: false,
      renderAsanaList: true
    })

  } 
  showSessionList=()=>{
    console.log("session list will now be rendered")
    this.setState({
      renderSessionAdd: false,
      renderSessionList: true,
      renderAsanaList: false
    })    
  }

render(){
  return (
    <div className="App">
    {
      this.state.loggedIn
      ?
      <React.Fragment>
      <Header
        email={this.state.loggedInUserEmail} 
        logout={this.logout}
        showSessionAdd={this.showSessionAdd}
        showAsanaList={this.showAsanaList}
        showSessionList={this.showSessionList}

        />
      <SessionContainer 
        renderSessionAdd={this.state.renderSessionAdd}
        renderAsanaList={this.state.renderAsanaList}
        renderSessionList={this.state.renderSessionList}
        />
      </React.Fragment>
      :
      <LoginRegisterForm
        login={this.login}
        register={this.register}
      />
    }   
  </div>
  );
}

}