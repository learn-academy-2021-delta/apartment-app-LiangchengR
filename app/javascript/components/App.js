import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  

  render() {
 
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="/users/sign_in" />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
