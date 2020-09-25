import React from "react";
import "./App.css";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { About } from "./components/About.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
