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
import ApartmentEdit from "./pages/ApartmentEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
      currentID: "",
      currentSession: {...this.props},
    };
  }

  getApByID = (id) => {
    return this.state.apartments.find(a => a.id === id)
  }

  componentDidMount() {
    this.apartmentRead();
  }

  getInfo = (id) => {
    this.setState({ currentID: id });
  };

  apartmentRead = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => this.setState({ apartments: payload }))
      .catch((errors) => console.log("Apartment index errors:", errors));
  };

  createNewAp = (newAp) => {
    fetch("/apartments", {
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

  updateAp = (editAp, id) => {
    console.log(editAp, id);
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(editAp),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then(response => {
        if (response.status === 422) {
          alert("Please check your submission.");
        }
        return response.json();
      })
      .then(payload => this.apartmentRead())
    .catch(errors => console.log("Apartment edit errors:", errors))
  }

  deleteAp = (id) => {
    fetch(`/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.apartmentRead())
      .catch((errors) => console.log("Apartment delete errors:", errors));
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
                  deleteAp={this.deleteAp}
                  id={this.state.currentID}
                  apartment={this.getApByID(this.state.currentID)}
                  currentSession={this.state.currentSession}
                />
              }
            />
            {this.props.logged_in && (
              <Route
                path="/protectedindex"
                element={
                  <ProtectedIndex
                    deleteAp={this.deleteAp}
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
                <ApartmentNew
                  createNewAp={this.createNewAp}
                  currentSession={this.state.currentSession}
                />
              }
            />

            <Route
              path="/apartmentsedit/:id"
              element={
                <ApartmentEdit
                  id={this.state.currentID}
                  updateAp={this.updateAp}
                  apartment={this.getApByID(this.state.currentID)}
                  currentSession={this.state.currentSession}
                />
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