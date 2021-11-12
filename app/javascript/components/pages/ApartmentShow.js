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
    const { apartment } = this.props;
    
    return (
      <>
        <div className="other-bttn">
          <NavLink to={"/apartmentindex"}>
            <Button>Back</Button>
          </NavLink>
        </div>
        <div className="apartment-show-container">
          <Card key={apartment.id}>
            <CardBody>
              <div className="apartment-card-header">
                <CardTitle tag="h5">Apartment Info</CardTitle>
                {this.props.currentSession.current_user.id ===
                  apartment.user_id && (
                  <span className="apartment-show-container-icons">
                    <NavLink to={`/apartmentsedit/${apartment.id}`}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="fa-edit"
                        style={{ color: "#00cc66" }}
                      />
                    </NavLink>
                    <NavLink
                      // 
                      onClick={() => (confirm("Are you sure you want to delete this apartment listing?") && this.props.deleteAp(apartment.id))}
                      to={`/apartmentindex`}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="fa-trash-alt"
                        style={{ color: "#ff0000" }}
                      />
                    </NavLink>
                  </span>
                )}
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
        </div>
      </>
    );
  }
}
