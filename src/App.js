import React, { Component } from 'react';
import './App.css';
import LoginRegisterForm from "./LoginRegisterForm"

export default class App extends Component{
  constructor(){
    super()
    this.state={
      loggedIn:false,
      loggedInUserEmail: ''
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

render(){
  return (
    <div className="App">
    <LoginRegisterForm
      login={this.login}
      register={this.register}
    />
    </div>
  );
}

}