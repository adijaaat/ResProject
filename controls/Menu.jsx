import React from 'react';
import Button from './Button.jsx';
import $ from 'jquery';
import SignIn from '../views/SignIn.jsx';

class Menu extends React.Component {
constructor(){
  super()
  this.state={isOpen:false}
  this.SignInFunc=this.SignInFunc.bind(this)
  this.closeFunc=this.closeFunc.bind(this)
}
SignInFunc(){
   this.setState({isOpen:true})
}
closeFunc(){
  this.setState({isOpen:false})
}
componentDidMount()
{

}

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className=""><div className="logo"></div></div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
    <ul className="navbar-nav right">
      <li className="nav-item">
      <Button btncss="btn btn-primary" text="Sign Up"></Button>
    </li>
      <li className="nav-item">
      <Button btncss="btn btn-outline-secondry" onclickFunc={this.SignInFunc} text="Sign In"></Button>
    </li>

    </ul>
  </div>
</nav>
<div>
<SignIn isOpen={this.state.isOpen} closeFunc={this.closeFunc}></SignIn></div>
</div>
    )
  }
}

export default Menu;
