import React, { Component } from 'react';
import ReactDom from 'react-dom'
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import login from '../carpoolLogin.jpg';
import Telstra from '../logo.jpg'

class Signup extends Component {

  constructor(props){
    super(props);
    this.Signup = this.Signup.bind(this);
  }

  Signup(creds){
    axios.post('http://10.69.158.79:3000/signup',{
      ...creds
    }).then(()=>{
      this.props.history.push('/')
    })
    //api call
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
      <div className="row">
      <div className="col-md-8">
        <img src={login} style={{width:"90%",marginTop:"10%"}}/>
      </div>
      <div className="col-md-4 col">
      <form className="form-group login-form">
      <div align="center" className="login"> <img src={Telstra} style={{width:"25%",marginLeft:"-20%"}}/><b>Signup</b> </div>
        <input className = "form-control" type="text" name="username" ref="username" placeholder="Username" required/><br/>
        <input className = "form-control" type="email" name="email" ref="email" placeholder="example@xyz.com" required/><br/>
        <input className = "form-control" type="password" name="password" ref="password" placeholder="Password" required/><br/>
        <input className = "form-control btn btn-success" type="button" name="signup" value="Signup" onClick={()=>{

          this.props.onSignup({
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value
          })
        }
        }/>
      </form>
      </div>
      </div>
      { this.props.status==200? (
        <Redirect to='/'/>
      ):(this.props.status!==""?(<div className="alert alert-warning fixed-top" align="center" role="alert">
        Signup Failed.
      </div>):(null))
      }

        </div>
      </React.Fragment>

    );
  }
}

export default Signup;
