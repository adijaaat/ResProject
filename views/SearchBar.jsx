import React from 'react';
import Autosuggest from 'react-autosuggest';
import CreatePromise from '../Actions/ServiceCaller.jsx'


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.


class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
    this.onChange=this.onChange.bind(this);
    this.onSuggestionsFetchRequested=this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested=this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions=this.getSuggestions.bind(this);
    this.renderSuggestion=this.renderSuggestion.bind(this);
  }
 getSuggestions(value,callback) {
    const inputValue = value.value.toLowerCase();
    const inputLength = inputValue.length;
let data= {"filter":inputValue}
let promise=CreatePromise('http://localhost:8081/searchRestorent','POST',data);
  promise.then(function(data){
   callback(data);
}).catch(function(ex){
  alert(ex.statusText)
})
  };
   renderSuggestion (suggestion){
     return(
    <div>
      {suggestion.name}
    </div>)
  }
  onChange (event) {
    this.setState({
      value: event.target.value
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested (value) {
    let that=this;
    this.getSuggestions(value,function(result){
      that.setState({
        suggestions: result
      });
    })


  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };
shouldComponentUpdate(nextProps, nextState){
  //if(this.state.value == nextState.value)
  //    return false;
  return true;
}
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Restorents',
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutoComplete;
