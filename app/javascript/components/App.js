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

class App extends React.Component {
  render() {
    console.log("logged in:", this.props.logged_in);
    console.log("current user:", this.props.current_user);
    console.log("sign up", this.props.new_user_route);
    console.log("sign in:", this.props.sign_in_route);
    console.log("sign out:", this.props.sign_out_route);
    return (
      <>
        <Header />

        <h1>Hello World</h1>
        <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/learn" component={LearnMore} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
