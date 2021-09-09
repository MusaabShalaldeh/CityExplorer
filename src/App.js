import React from "react";
import axios from "axios";
import Header from "./assets/components/header.js";
import Footer from "./assets/components/footer.js";
import Location from './assets/components/location';
import LocationForm from './assets/components/locationForm';
import FailMessage from "./assets/components/failmessage.js";
import Weather from "./assets/components/weather.js";
import Movies from "./assets/components/movies.js";
import { Form, Button, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MapImage from "./assets/images/mapplaceholder.jpg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      REACT_APP_LOCATION: process.env.REACT_APP_LOCATION,
      locationName: "",
      lon: "",
      lat: "",
      weatherData: [],
      moviesData: [],
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
      this.setState({
        locationName: locName,
        lon: result.data[0].lon,
        lat: result.data[0].lat,
        weatherData: await axios.get(
          // `http://localhost:3010/weather?cityName=${locName}&lat=${result.data[0].lat}&lon=${result.data[0].lon}`
          `https://ms-city-explorer-api.herokuapp.com/weather?cityName=${locName}&lat=${result.data[0].lat}&lon=${result.data[0].lon}`
        ),
        moviesData: await axios.get(
          `https://ms-city-explorer-api.herokuapp.com/movies?search_key=${locName}`
          // `http://localhost:3010/movies?search_key=${locName}`
        ),
      });
      console.log(this.state.weatherData.data);
      const img = `https://maps.locationiq.com/v3/staticmap?key=${myKey}&center=${this.state.lat},${this.state.lon}`;
      this.setState({
        locImg: img,
      });
      console.log(this.state.moviesData);
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
    console.log(this.state.moviesData.data);
    return (
      <>
        <Header />
        <FailMessage
          hideErrorMessage={this.hideErrorMessage}
          show={this.state.show}
          error={this.state.errorMsg}
        />
        <Location locationName={this.state.locationName} lon={this.state.lon} lat={this.state.lat}/>
        <LocationForm getData={this.getData}/>
        <div id="mapContainer">
          <Image
            class="textCenter"
            src={this.state.locImg}
            width="700"
            height="700"
          />
        </div>
          <Weather data={this.state.weatherData.data} />
      
        <Movies moviesData={this.state.moviesData.data} />
      

        <Footer />
      </>
    );
  }
}
export default App;
