import React from 'react';
class TextBox extends React.Component{
    render(){
      return(
        <div>
            <input type="text" className={this.props.textcss} onChange={this.props.txtonchange} value={this.props.txtvalue} />
        </div>
      );
    }
}

export default TextBox;
