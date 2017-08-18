import React from 'react';
class Button extends React.Component {
   render() {
      return (
         <div>
           <button type="button" className={this.props.btncss} onClick={this.props.onclickFunc.bind(this)}>Click</button>
         </div>
      );
   }
}
export default Button;
