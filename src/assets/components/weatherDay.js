import React from "react";
import { Card } from "react-bootstrap";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Weather Forecast for:</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.date}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default WeatherDay;
