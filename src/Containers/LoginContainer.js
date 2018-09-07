import {connect} from 'react-redux';
import Login from './../Component/Login.js';
import {validateCredentials} from './../Actions/loginActions.js';

var mapStateToProps = (state)=>{
  return {
    status:state.status
  }
}

var mapDispatchToProps = (dispatch)=>{
  return {
    onLogin:(creds)=>{
      dispatch(validateCredentials(creds));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
