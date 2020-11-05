import React from "react";
import TopBar from "./Component/TopBar/TopBar";
import {BrowserRouter as Router} from "react-router-dom";
import TopNav from "./Component/TopNav/TopNav";
import Homepage from "./Component/Homepage/Homepage";
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <TopNav/>
        <Homepage/>
      </div>
    </Router>
  );
}

export default App;
