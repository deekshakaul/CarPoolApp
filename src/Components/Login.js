import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import login from '../carpoolLogin.jpg';
import Telstra from '../logo.jpg'
class Login extends Component {

  constructor(props){
    super(props);
    this.Signup = this.Signup.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem('loggedIn')){
      this.props.history.push('/show-ride');
    }
  }

  Signup(){
    // sessionStorage.setItem('loggedIn',true);
    this.props.history.push('/signup');
    //api call
  }

  render() {
    return (
      <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col-sm-8">
                    <img src={login} style={{width:"90%"}}/>
                  </div>
                  <div className="col-sm-4">
                    <form className="form-group login-form">
                      <div align="center" className="login"> <img src={Telstra} style={{width:"25%",marginLeft:"-20%"}}/><b>Telstra Car Pool </b> </div><br/>
                      <input className= "form-control" ref="username" type="text" name="username" placeholder="Username"/><br/>
                      <input className= "form-control" ref="password" type="password" name="password" placeholder="Password"/><br/>
                      <input className= "form-control btn btn-primary" type="button" name="login" value="Login" onClick={()=>{
                        this.props.onLogin({
                          username:this.refs.username.value,
                          password:this.refs.password.value
                        })
                      }}/><br/><br/>
                      <input className= "form-control btn btn-success" type="button" name="signup" value="Signup" onClick={this.Signup}/>
                    </form>
                  </div>
              </div>
              { this.props.status==200? (
                <Redirect to='/show-ride'/>
              ):(this.props.status!==""?(<div className="alert alert-warning fixed-top" align="center" role="alert">
                Invalid credentials.
              </div>):(null))
              }
          </div>
      </React.Fragment>
    );
  }
}

export default Login;
