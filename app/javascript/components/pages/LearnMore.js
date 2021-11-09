import React, { Component } from "react"

export default class LearnMore extends Component {
    render() {
        return (
          <>
            <div className="learn-more-container">
              <img
                src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg"
                style={{ height: "400px" }}
              ></img>
              <h3>
                Servicing over a million customers, Flat Finders aims to be the
                top apartment finder app. We are dedicated to helping anybody
                find their home sweet home.
              </h3>
            </div>
          </>
        );
    }
}
