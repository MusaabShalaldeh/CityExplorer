import React from "react";
import {Form, Button} from 'react-bootstrap';

class LocationForm extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.getData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              name="locName"
              type="text"
              placeholder="Amman, New York etc..."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default LocationForm;
