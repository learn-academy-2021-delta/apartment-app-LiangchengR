import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default class ApartmentShow extends Component {
  render() {
    const { apartment, id } = this.props;
    return (
      <>
        <div className="apartment-show-container">
          <Card key={apartment.id}>
            <CardBody>
              <div className="apartment-card-header">
                <CardTitle tag="h5">Apartment Info</CardTitle>
                <span className="apartment-show-container-icons">
                  <FontAwesomeIcon icon={faEdit} className="fa-edit" />
                  <FontAwesomeIcon icon={faTrash} className="fa-trash-alt" />
                </span>
              </div>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Street: {apartment.street}
                <br />
                City: {apartment.city}
                <br />
                State: {apartment.state}
              </CardSubtitle>
            </CardBody>
            <img
              alt="placeholder"
              src="http://placeimg.com/640/480/arch"
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
                {apartment.pets ? "Pets are allowed" : "Pets are not allowed"}
                <br />
                <br />
                Interested? Reach out!
                <br />
                Manager: {apartment.manager}
                <br />
                Email: {apartment.email}
              </CardText>
            </CardBody>
          </Card>
          <NavLink to={"/apartmentindex"}>
            <Button>Back</Button>
          </NavLink>
        </div>
      </>
    );
  }
}
