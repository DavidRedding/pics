import React from "react";
import axios from "axios";
import SearchBar from "../SearchBar";

class App extends React.Component {
  // prettier-ignore
  onSearchSubmit = (term) => {
    axios 
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: "Client-ID _u2soxYwIjernz7ogJlXafjkq-Sk531f0JHpVMSB7oE",
        },
      })
    };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
