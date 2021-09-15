import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import Home from "./components/Home";
import Nested from "./components/Nested";
import Count from "./components/Counter";
import Count2 from "./components/Counter2";
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React exercise</p>
        </header>
        <body>
          <div className="">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/nested">Nested</Link>
                </li>
                <li>
                  <Link to="/count">Count</Link>
                </li>
                <li>
                  <Link to="/count2">Count2</Link>
                </li>
                <li>
                  <Link to="/useEffect">UseEffect</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/nested">
              <Nested />
            </Route>
            <Route path="/count">
              <Count />
            </Route>
            <Route path="/count2">
              <Count2 />
            </Route>
            <Route path="/useEffect">
              <UseEffect />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
