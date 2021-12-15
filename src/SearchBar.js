import React from "react";

class SearchBar extends React.Component {
  // "e" contains a bunch of info about the event that just occured.
  onInputChange(e) {
    console.log(e.target.value); // this spec contains the text, that the user just added to input.
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
