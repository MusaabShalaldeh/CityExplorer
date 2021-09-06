import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data) {
      return (
        <>
          <div>
              {this.props.data.map(item=>{
                  return(
                    <Card border="primary" style={{ width: "18rem" }}>
                    <Card.Header>Weather Forecast for:</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.date}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                  )
              })}
          </div>
        </>
      );
    }
    else {
      return <></>;
    }
  }
}

export default Weather;
