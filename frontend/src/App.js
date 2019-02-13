import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <nav className ="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Flick List</Link>
      <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Movies</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Add Movie</Link>
                </li>
              </ul>
            </div>
      </nav>
      <br/>
        <Route path="/" exact component={MovieList} />
        <Route path="/add" exact component={AddMovie} />
      </div>
      </Router>
    );
  }
}

export default App;
