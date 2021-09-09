import React from "react";
import WeatherDay from "./weatherDay";
import { Table } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <>
          <div id="tableContainer">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date:</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map((item) => {
                  return (
                    <WeatherDay date={item.date} desc={item.description} />
                  );
                })}
              </tbody>
            </Table>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Weather;
