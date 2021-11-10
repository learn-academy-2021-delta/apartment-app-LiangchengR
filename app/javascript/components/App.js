import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import mockApartments from './mockApartments.js'
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import ProtectedIndex from "./pages/ProtectedIndex";
import ApartmentNew from "./pages/ApartmentNew";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
      currentID: "",
      currentApartment: undefined,
      currentSession: {...this.props},
    };
  }

  componentDidMount() {
    this.apartmentRead();
  }

  getInfo = (id, apartment) => {
    this.setState({ currentID: id, currentApartment: apartment });
    console.log("getInfo ran");
  };

  apartmentRead = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => this.setState({ apartments: payload }))
      .catch((errors) => console.log("Apartment index errors:", errors));
  };

  createNewAp = (newAp) => {
    console.log(newAp)
    fetch("/apartments/new", {
      body: JSON.stringify(newAp),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Please check your submission.");
        }
        return response.json();
      })
      .then((payload) => this.apartmentRead())
      .catch((errors) => console.log("Apartment create errors:", errors))
  }

  render() {
    // console.log("logged in:", this.props.logged_in);
    // console.log("current user:", this.props.current_user);
    // console.log("sign up", this.props.new_user_route);
    // console.log("sign in:", this.props.sign_in_route);
    // console.log("sign out:", this.props.sign_out_route);

    const { apartments } = this.state;
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
              element={
                <ApartmentIndex
                  apartments={apartments}
                  getInfo={this.getInfo}
                  currentSession={this.state.currentSession}
                />
              }
            />
            <Route
              path="/apartmentshow/:id"
              element={
                <ApartmentShow
                  id={this.state.currentID}
                  apartment={this.state.currentApartment}
                  currentSession={this.state.currentSession}
                />
              }
            />
            {this.props.logged_in && (
              <Route
                path="/protectedindex"
                element={
                  <ProtectedIndex
                    apartments={apartments.filter(
                      (apartment) =>
                        apartment.user_id === this.props.current_user.id
                    )}
                    getInfo={this.getInfo}
                  />
                }
              />
            )}
            <Route
              path="/apartmentnew"
              element={
                <ApartmentNew createNewAp={this.createNewAp}/>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;