import React from "react";
import TopBar from "./Component/TopBar/TopBar";
import {BrowserRouter as Router} from "react-router-dom";
import TopNav from "./Component/TopNav/TopNav";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <TopNav/>
      </div>
    </Router>
  );
}

export default App;
