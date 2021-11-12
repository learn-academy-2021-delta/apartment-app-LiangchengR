import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class ProtectedIndex extends Component {
  constructor(props) {
    super(props);
  }

  returnInfo = (id) => {
    console.log("this is passing info from protected to app" + id);
    this.props.getInfo(id);
  };

  render() {
    const { apartments } = this.props;
    return (
      <>
        <div className="other-bttn">
          <NavLink to={"/apartmentnew"}>
            <Button>Add Apartment</Button>
          </NavLink>
        </div>
        <div className="protected-index-container">
          {apartments.map((apartment) => {
            return (
              <Card key={apartment.id}>
                <CardBody>
                  <div className="apartment-card-header">
                    <CardTitle tag="h5">Apartment Info</CardTitle>
                    <span className="apartment-show-container-icons">
                      <NavLink
                        onClick={() => this.returnInfo(apartment.id)}
                        to={`/apartmentsedit/${apartment.id}`}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="fa-edit"
                          style={{ color: "#00cc66" }}
                        />
                      </NavLink>
                      <NavLink to={`/`}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="fa-trash-alt"
                          style={{ color: "#ff0000" }}
                        />
                      </NavLink>
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
                    {apartment.pets
                      ? "Pets are allowed"
                      : "Pets are not allowed"}
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
      </>
    );
  }
}
