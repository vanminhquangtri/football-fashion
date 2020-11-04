import React from "react";
import TopBar from "./Component/TopBar/TopBar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
      </div>
    </Router>
  );
}

export default App;
