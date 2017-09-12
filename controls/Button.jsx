import React from 'react';
class Button extends React.Component {
   render() {
      return (
         <div>
           <button type="button" className={this.props.btncss} onClick={this.props.onclickFunc}>{this.props.text}</button>
         </div>
      );
   }
}
export default Button;
