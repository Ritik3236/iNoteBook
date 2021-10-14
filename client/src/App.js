import './App.css';
import React, { useState } from "react";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState showAlert={showAlert}>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );

}

export default App;
