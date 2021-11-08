import React, { Component } from "react"
import bg from "../assets/app-bg.png"

export default class Home extends Component {
    render() {
        return (
          <>
            <div className="home-container">
              <img
                src={bg}
                style={{
                  backgroundSize: "cover",
                  maxWidth: "100%",
                  height: "auto",
                  zIndex: "-1",
                }}
              />

              <h2>
                There is nothing more special than finding your own space.
                <br/>
                <br/>
                Welcome to Flat Finder where we show you the latest apartment
                listings. Click on Apartments to start your journey!
              </h2>
            </div>
          </>
        );
    }
}
