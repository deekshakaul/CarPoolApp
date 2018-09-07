import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.Signup = this.Signup.bind(this);
  }

  Signup(){
    this.props.history.push('/')
    //api call
  }

  render() {
    return (
      <div>
      <form class="form-group">
        <input class = "form-control" type="text" name="username" placeholder="Username"/><br/>
        <input class = "form-control" type="password" name="password" placeholder="Password"/><br/>
        <input class = "form-control" type="button" name="signup" value="signup" onClick={this.Signup}/>
      </form>
      </div>
    );
  }
}

export default Signup;
