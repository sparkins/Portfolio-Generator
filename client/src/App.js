import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import CardExampleCard from './pages/Projects/Test'


class App extends Component {
  render() {
    return (
      // <Router>
      <div>

        <Navbar />
        <h1>Welcome to the world's best Portfolio Generator</h1>

        <CardExampleCard />
      </div >
      // </Router >
    );
  }
}

export default App;
