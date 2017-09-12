import React from 'react';
import TextBox from '../controls/TextBox.jsx';
import Button from '../controls/Button.jsx';
import Modal from 'react-modal';
import CreatePromise from '../Actions/ServiceCaller.jsx'

const customStyles = {
  content : {
    width:'400px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }}

class SignIn extends React.Component {
constructor(){
  super()
  this.state={username:'', isopen:false,
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

componentWillReceiveProps(nextProps){
if(nextProps.isOpen== true)
  this.setState({isopen:true})
  else
  this.setState({isopen:false})
}
  render(){
    return(
      <Modal
  isOpen={this.props.isOpen}
  contentLabel="Modal" style={customStyles}>
  <div className="container-fluid">
  <div className="row">
   <div className="col-md-12 col-md-offset-12">
     <div className="box">
      <form className="form-horizontal">
  <div className="form-group">
    <label className="control-label" >Email</label>
      <TextBox type="text" textcss='form-control' txtvalue={this.state.username} txtonchange={this.UserOnChange}/>
  </div>
  <div className="form-group">
    <label className="control-label" >Password</label>
      <input type="password" className="form-control" value={this.state.password} onChange={this.PasswordOnChange} />
  </div>
  <div className="form-group">
      <Button onclickFunc={this.onclickFunc} text="Sign in" btncss="btn-block btn btn-lg btn-primary" ></Button>
      <Button onclickFunc={this.props.closeFunc} text="Close" btncss="btn-block btn btn-lg btn-secondary" ></Button>
  </div>
</form>
</div>
</div>
</div>
</div>
  </Modal>
    )
  }
}

export default SignIn;
