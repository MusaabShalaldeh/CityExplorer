import React from "react";
import {Card} from 'react-bootstrap';

class Location extends React.Component {
  render() {
    return (
      <>
      <Card className="text-center">
          <Card.Header>Location</Card.Header>
          <Card.Body>
            <Card.Title>City Name: {this.props.locationName}</Card.Title>
            <Card.Text>Longitude: {this.props.lon}</Card.Text>
            <Card.Text>latitude: {this.props.lat}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Location;