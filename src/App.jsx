import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">React Weather App</h1>
      <SearchBar />
    </div>
  );
};

export default App;

