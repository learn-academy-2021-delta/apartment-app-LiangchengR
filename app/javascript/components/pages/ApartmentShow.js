import React, { Component } from 'react'

export default class ApartmentShow extends Component {
    render() {
        console.log(this.props.id + this.props.apartment)
        const { apartment, id } = this.props;
        return (
          <div>
            <h1>Apartment Info</h1>
            <p>{id}</p>
            <p>{apartment.street}</p>
          </div>
        );
    }
}
