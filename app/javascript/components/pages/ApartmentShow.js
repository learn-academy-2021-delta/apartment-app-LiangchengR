import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, CardSubtitle} from "reactstrap";

export default class ApartmentShow extends Component {
    render() {
        const { apartment, id } = this.props;
        console.log(apartment)
        return (
          <>
            <div className="apartment-show-container">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    Apartment Info
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {apartment.street}
                    <br />
                    {apartment.city}
                    <br />
                    {apartment.state}
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="placeholder"
                  src="http://placeimg.com/640/480/architecture"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    Price: {apartment.price}
                    <br />
                    Bedrooms: {apartment.bedrooms}
                    <br />
                    Bathrooms: {apartment.bathrooms}
                    <br />
                    {apartment.pets ? (
                      <p>Pets are allowed</p>
                    ) : (
                      <p>Pets are not allowed</p>
                    )}
                    <br />
                    Interested? Reach out!
                    <br />
                    Manager: {apartment.manager}
                    <br />
                    Email: {apartment.email}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </>
        );
    }
}
