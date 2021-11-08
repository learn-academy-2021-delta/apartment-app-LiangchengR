import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardText, Button} from "reactstrap"

export default class ApartmentIndex extends Component {


    render() {
        const { apartments } = this.props;
        
        return (
          <div>
            {apartments.map((apartment) => (
              <Card key={apartment.id}>
                <CardBody>
                  <CardTitle tag="h5">{apartment.street}</CardTitle>
                  <CardText className="text-muted">
                    street: {apartment.street} city: {apartment.city}, state:
                    {apartment.state}
                  </CardText>
                    <Button>More Info</Button>
                </CardBody>
              </Card>
            ))}
          </div>
        );
    }
}
