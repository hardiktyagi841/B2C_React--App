import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import SearchBox from "../Searchbox/SearchBox";

class App extends React.Component {
  state = {
    search: "going to be namebar",
  };
  inputchange = () => {
    alert("I have been called");
  };
  render() {
    return (
      <div>
        <h1>t{this.state.search} I am a render components of clasa App;</h1>
        <Navbar header={this.state.search} />
        <SearchBox inputchange={this.inputchange} />

        <button
          onClick={() => {
            this.setState({
              search: "I AM CLICKED",
            });
          }}
        >
          CLICK ME ---------------PLZZZZ{" "}
        </button>
      </div>
    );
  }
}

export default App;
