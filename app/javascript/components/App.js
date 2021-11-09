import React, { Component } from "react";
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
// import mockApartments from './mockApartments.js'
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apartments: [],
      currentID: "",
      currentApartment: undefined,
    }
  }

  componentDidMount() {
    this.apartmentRead()
  }

  getInfo = (id, apartment) => {
    this.setState({ currentID: id, currentApartment: apartment })
    console.log("getInfo ran");
    
  }

  apartmentRead = () => {
    fetch("/apartments")
      .then(response => response.json())
      .then(payload => this.setState({ apartments: payload }))
      .catch(errors => console.log('Apartment index errors:', errors))
  }

  render() {
    const { apartments } = this.state
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route
              path="/apartmentindex"
              element={<ApartmentIndex apartments={apartments} getInfo={this.getInfo} />}
            />
            <Route
              path="/apartmentshow/:id"
              element= {<ApartmentShow id={this.state.currentID} apartment={this.state.currentApartment} />}
            />
          </Routes>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

//<Route path="profile" element={<Profile />}>
            // <Route path=":id" element={<MyProfile />} />