import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Footer from './components/Footer/footer';
// import Projects from "./components/Projects/projectForm";
// import ProjectCards from './pages/projects/projectPage';
import About from './pages/about/about';
import Login from './pages/login/login';
import ProjectDisplay from './pages/projects/projectPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div >
          <Navbar />
          <Switch> 

          <Route path="/login" component={Login} />
          <Route exact path = "/profile" component = {About} />
          <Route exact path = "/projects" component = {ProjectDisplay} />

          </Switch>
          <Footer />
        </div >
      </Router >
    );
  }
}

export default App;
