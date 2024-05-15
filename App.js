import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Phani50101/wheather.git" target="_blank" rel="noreferrer">
          Download Source Code
        </a>{" "}
        | Developed by <a href="">phani</a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
