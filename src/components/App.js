import React from "react";
import Header from "./Header";
import List from "./List";
import "../styles/App.css";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header heading="My Grocery List" />
        <List />
      </div>
    );
  }
}

export default App;
