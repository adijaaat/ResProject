import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import CreatePromise from '../Actions/ServiceCaller.jsx';


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/*function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return people.filter(person => regex.test(getSuggestionValue(person)));
}*/

function getSuggestionValue(suggestion) {
  return `${suggestion.name}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.name}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content '}>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

class Adi_Autocomplete extends React.Component {
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
  }
  getSuggestions(value,callback) {
     const inputValue = value.value.toLowerCase();
     const inputLength = inputValue.length;
  let data= {"filter":inputValue}
  let promise=CreatePromise('http://localhost:8081/searchRestorent','POST',data);
   promise.then(function(data){
    callback(data);
  }).catch(function(ex){
   callback([])
  })
};

  onChange (event,_ref) {
    this.setState({
      value: _ref.newValue
    });
  };

  onSuggestionsFetchRequested (value) {
    let that=this;
    this.getSuggestions(value,function(result){
      that.setState({
        suggestions: result
      });
    })
  };

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Restorents",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default  Adi_Autocomplete;
