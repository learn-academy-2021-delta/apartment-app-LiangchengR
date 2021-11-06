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
import mockApartments from './mockApartments.js'
import ApartmentIndex from "./pages/ApartmentIndex";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apartments: mockApartments,
    }
  }

  componentDidMount() {
    this.apartmentRead()
  }

  apartmentRead = () => {
    fetch("http://localhost:3000/apartments")
      .then(response => response.json())
      .then(apartmentsArray => this.setState({ apartments: apartmentsArray }))
      .catch(errors => console.log('Apartment read errors:', errors))
  }

  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home homeToggle={this.state.homeLoaded} />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route
              path="/apartmentindex"
              element={<ApartmentIndex apartments={this.state.apartments} />}
            />
          </Routes>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;


// react visible to users javascript, rails is holding my data 
// views- react routes0-resources controller-in rails for our db 
//get react and active record to communicate -> cat tinder. 
//how do different applicationstalk to each other how to get json from rails to our react 
