import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: 0,
        bathrooms: 0,
        pets: "",
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
    this.props.createNewAp(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <div className="apform-container">
          <h2>New Apartment</h2>
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
            Add Apartment
          </Button>
          {/* {this.state.submitted && <Redirect to="/apartmentindex" />} */}
        </div>
      </>
    );
  }
}
