import React from "react";
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

class App extends React.Component {
  render() {
    // console.log("logged in:", this.props.logged_in);
    // console.log("current user:", this.props.current_user);
    // console.log("sign up", this.props.new_user_route);
    // console.log("sign in:", this.props.sign_in_route);
    // console.log("sign out:", this.props.sign_out_route);

    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/learn" element={<LearnMore />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
