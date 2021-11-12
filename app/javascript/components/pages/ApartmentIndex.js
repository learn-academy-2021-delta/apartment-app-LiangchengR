import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap"
import { NavLink } from "react-router-dom";
import { faRoad, faMap, faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ApartmentIndex extends Component {
  constructor(props) {
    super(props);
  }

  returnInfo = (id) => {
    console.log("passing id to App:" + id );
    this.props.getInfo(id);
  };

  render() {
    const { apartments, currentSession } = this.props;
    return (
      <>
        {currentSession.logged_in && 
          (<div className="other-bttn">
            <NavLink to={"/apartmentnew"}>
              <Button>Add Apartment</Button>
            </NavLink>
          </div>)
        }
        <div className="apartment-index-container">
          {apartments.map((apartment) => {
            return (
                <Card className="card" key={apartment.id}>
                  <CardBody>
                    <CardTitle tag="h5">Apartment</CardTitle>
                    <CardText className="text-muted">
                    <span>
                        <FontAwesomeIcon icon={faRoad} className="fa-road" />
                        {apartment.street}
                      </span>
                      <br />
                      <span>
                        <FontAwesomeIcon icon={faCity} className="fa-city" />
                        {apartment.city}
                        <br />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faMap} className="fa-map-pin" />
                        {apartment.state}
                        <br />
                      </span>
                    </CardText>

                    <NavLink to={`/apartmentshow/${apartment.id}`}>
                      <Button
                        onClick={() => this.returnInfo(apartment.id)}
                      >
                        LEARN MORE
                      </Button>
                    </NavLink>
                  </CardBody>
                </Card>
            );
          })}
        </div>
      </>
    );
  }
}
