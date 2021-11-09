import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap"
import { faRoad, faMap, faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ApartmentIndex extends Component {


    render() {
        const { apartments } = this.props;
        
        return (
          <div className="apartment-index-container">
            {apartments.map((apartment) => {
              return (
                <Card className="card" key={apartment.id}>
                  <CardBody>
                    <CardTitle tag="h5">{apartment.street}</CardTitle>
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
                    <Button>More Info</Button>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        );
    }
}
