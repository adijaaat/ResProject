import React from 'react';
import TextBox from '../controls/TextBox.jsx';
import Button from '../controls/Button.jsx';
import CreatePromise from '../Actions/ServiceCaller.jsx'

class SignIn extends React.Component {
constructor(){
  super()
  this.state={username:'',
  password:''}
this.UserOnChange=this.UserOnChange.bind(this)
this.PasswordOnChange=this.PasswordOnChange.bind(this)
this.onclickFunc=this.onclickFunc.bind(this)
}
  UserOnChange(e){
    this.setState({username:e.target.value})
  }
  PasswordOnChange(e){
    this.setState({password:e.target.value})
  }
onclickFunc(){
  let data={username:this.state.username,password:this.state.password}
  let promise=CreatePromise('http://localhost:8081/saveData','POST',data);

    promise.then(function(data){
      if(data)
  alert("Success Login")
  else alert("Username password Wrong")
    }).catch(function(ex){
      alert(ex.statusText)
    })
}
  render(){
    return(
      <form className="form-horizontal">
  <div className="control-group">
    <label className="control-label" >Email</label>
    <div className="controls">
      <TextBox type="text" textcss='text-primary' txtvalue={this.state.username} txtonchange={this.UserOnChange}/>
    </div>
  </div>
  <div className="control-group">
    <label className="control-label" >Password</label>
    <div className="controls">
      <input type="password" value={this.state.password} onChange={this.PasswordOnChange} />
    </div>
  </div>
  <div className="control-group">
    <div className="controls">
      <Button type="submit" onclickFunc={this.onclickFunc} btncss="btn" >Sign in</Button>
    </div>
  </div>
</form>
    )
  }
}

export default SignIn;
