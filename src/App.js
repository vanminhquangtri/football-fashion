import React from "react";
import TopBar from "./Component/TopBar/TopBar";
import {BrowserRouter as Router} from "react-router-dom";
import TopNav from "./Component/TopNav/TopNav";
import Homepage from "./Component/Homepage/Homepage";
import {Provider} from "react-redux";
import Store from "./Store/Store";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <TopBar/>
          <TopNav/>
          <Homepage/>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
