import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class ProtectedIndex extends Component {
  constructor(props) {
    super(props);
  }

  returnInfo = (id, apartment) => {
    this.props.getInfo(id, apartment);
  };
    
  render() {
    const { apartments } = this.props;
    return (
      <div className="protected-index-container">
        {apartments.map((apartment) => {
          return (
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
          );
        })}
      </div>
    );
  }
}
