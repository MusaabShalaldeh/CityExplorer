import React from "react";
import axios from "axios";
import Header from "./assets/components/header.js";
import Footer from "./assets/components/footer.js";
import FailMessage from "./assets/components/failmessage.js";
import { Form, Button, Image, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MapImage from "./assets/images/mapplaceholder.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      REACT_APP_LOCATION: process.env.REACT_APP_LOCATION,
      locationName: "",
      lon: "",
      lat: "",
      locImg: MapImage,
      show: false,
      errorMsg: "",
    };
  }
  getData = async (event) => {
    event.preventDefault();
    const locName = event.target.locName.value;
    const myKey = this.state.REACT_APP_LOCATION;
    const url = `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${locName}&format=json`;

    try {
      let result = await axios.get(url);
      console.log(result.data[0]);
      this.setState({
        locationName: locName,
        lon: result.data[0].lon,
        lat: result.data[0].lat,
      });
      const img = `https://maps.locationiq.com/v3/staticmap?key=${myKey}&center=${this.state.lat},${this.state.lon}`;
      this.setState({
        locImg: img,
      });
    } catch (error) {
      this.showErrorMessage();
      this.setState({
        errorMsg: error.message,
      });
    }
  };

  showErrorMessage = () => {
    this.setState({
      show: true,
    });
  };
  hideErrorMessage = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <FailMessage
          hideErrorMessage={this.hideErrorMessage}
          show={this.state.show}
          error={this.state.errorMsg}
        />
        <Card className="text-center">
          <Card.Header>Location</Card.Header>
          <Card.Body>
            <Card.Title>City Name: {this.state.locationName}</Card.Title>
            <Card.Text>Longitude: {this.state.lon}</Card.Text>
            <Card.Text>latitude: {this.state.lat}</Card.Text>
          </Card.Body>
        </Card>

        <div className="text-center">
          <Image
            class="textCenter"
            src={this.state.locImg}
            width="700"
            height="700"
          />
        </div>
        <Form onSubmit={this.getData}>
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
        <Footer />
      </>
    );
  }
}
export default App;
