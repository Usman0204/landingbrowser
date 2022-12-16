import React, { useState, useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./components/Landing";
import Oasis from './components/oasis/oasis.js'
function App() {
  return (
    <>
      <ToastContainer style={{ fontSize: 20 }} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          <Route  path="/aosis">
            <Oasis/>
          </Route>
          <Redirect to={`/`}></Redirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
