import React, { Component } from 'react';
import login from '../carpoolLogin.jpg';


class Login extends Component {

  constructor(props){
    super(props);
    this.Login = this.Login.bind(this);
    this.Signup = this.Signup.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem('loggedIn')){
      this.props.history.push('/show-ride');
    }
  }

  // Login(){
  //   sessionStorage.setItem('loggedIn',true);
  //   this.props.history.push('/show-ride');
  //   //api call
  // }

  Signup(){
    sessionStorage.setItem('loggedIn',true);
    this.props.history.push('/signup');
    //api call
  }

  render() {
    return (
      React.Fragment>
      <div class="container">
      <div class="row">
      <div class="col-lg-8 col-md-8 col-sx-0">
        <img src={login} style={{width:"90%"}}/>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
      <form class="form-group login-form">
        <div align="center" class="login"> Login </div><br/>
        <input class = "form-control" type="text" name="username" placeholder="Username"/><br/>
        <input class = "form-control" type="password" name="password" placeholder="Password"/><br/>
        <input class = "form-control btn btn-primary" type="button" name="login" value="login" onClick={this.props.onLogin}/><br/><br/>
        <input class = "form-control btn btn-success" type="button" name="signup" value="signup" onClick={this.Signup}/>
      </form>
      </div>
      </div>
      </div>
      {this.props.status==200? (
        <Redirect to='/show_rides'
      ):(null)
      )}
      </React.Fragment>
    );
  }
}

export default Login;
