import React from "react";
import WeatherDay from "./weatherDay";

class Weather extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <>
          <div>
              {this.props.data.map(item=>{
                  return (<WeatherDay date={item.date} desc={item.description}/>)
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
