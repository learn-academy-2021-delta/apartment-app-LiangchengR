import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink, Navigate } from "react-router-dom";

export default class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: this.props.apartment.street,
        city: this.props.apartment.city,
        state: this.props.apartment.state,
        manager: this.props.apartment.manager,
        email: this.props.apartment.email,
        price: this.props.apartment.price,
        bedrooms: this.props.apartment.bedrooms,
        bathrooms: this.props.apartment.bathrooms,
        pets: this.props.apartment.pets,
        user_id: this.props.currentSession.current_user.id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    console.log("sending form to App.js:" + this.state.form + "sending id to App.js:" + this.props.apartment.id);
    this.props.updateAp(this.state.form, this.props.apartment.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <div className="apform-container">
          <h2>Edit Apartment</h2>
          <Form>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                type="text"
                name="street"
                onChange={this.handleChange}
                value={this.state.form.street}
              />
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.form.city}
              />
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.form.state}
              />

              <Label for="manager">Manager</Label>
              <Input
                type="text"
                name="manager"
                onChange={this.handleChange}
                value={this.state.form.manager}
              />

              <Label for="email">Managers' Email</Label>
              <Input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.form.email}
              />

              <Label for="price">Price</Label>
              <Input
                type="text"
                name="price"
                onChange={this.handleChange}
                value={this.state.form.price}
              />
              <Label for="bedrooms">Number of Bedrooms</Label>
              <Input
                type="number"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.form.bedrooms}
              />
              <Label for="bathrooms">Number of Bathrooms</Label>
              <Input
                type="number"
                name="bathrooms"
                onChange={this.handleChange}
                value={this.state.form.bathrooms}
              />

              <Label for="pets">Are Pets Allowed?</Label>
              <Input
                type="select"
                name="pets"
                onChange={this.handleChange}
                value={this.state.form.pets}
              >
                <option>true</option>
                <option>false</option>
              </Input>
            </FormGroup>
          </Form>

          <NavLink to="/">
            <Button color="secondary">Home</Button>
          </NavLink>

          <Button name="submit" onClick={this.handleSubmit} color="success">
            Submit Changes
          </Button>
          {this.state.submitted && (
            <Navigate to={`/apartmentshow/${this.props.apartment.id}`} />
          )}
        </div>
      </>
    );
  }
}
