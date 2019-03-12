import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Footer from './components/Footer/footer';
// import Projects from "./components/Projects/projects";
import {AddProjectModal} from "./components/Projects/projects";
import ProjectCards from './pages/projects/projectPage';


class App extends Component {
  render() {
    return (
      // <Router>
      <div>

        <Navbar />
        <h1>Welcome to the world's best Portfolio Generator</h1>
        {/* <AddProjectModal /> */}
        {/* <Projects /> */}
        {/* <ProjectCards /> */}
        <Footer />
      </div >
      // </Router >
    );
  }
}

export default App;
