import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"

export default class ApartmentIndex extends Component {


    render() {
        const { apartments } = this.props;
        console.log(this.props.apartments);
        
        return (
          <div>
            {apartments.map((apartment) => (
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{apartment.street}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    street: {apartment.street} city: {apartment.city}, state:
                    {apartment.state}, , price: {apartment.price}, bedrooms:{" "}
                    {apartment.bedrooms}, bathrooms: {apartment.bathrooms},
                    pets:
                    {apartment.pets}
                  </CardText>
                  <div className="ml-auto">
                    <Button>More Info</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        );
    }
}
