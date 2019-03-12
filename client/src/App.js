import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/projects";
import About from "./components/pages/about"
// import Projects from "./components/Projects/projects";
import {AddProjectModal} from "./components/Projects/projects";
// import Footer from "./components/Footer/footer";


class App extends Component {
  render() {
    return (
      // <Router>
      <div>

        <Navbar />
        <h1>Welcome to the world's best Portfolio Generator</h1>
        {/* <Projects /> */}
        <About />
        <AddProjectModal />
        {/* <Projects /> */}
      </div >
      // </Router >
    );
  }
}

export default App;
