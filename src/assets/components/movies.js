import React from "react";
import { Row } from "react-bootstrap";
import Movie from './movie';

class Movies extends React.Component {
  render() {
    if (this.props.moviesData) {
      return (
        <>
          <Row id="moviesRow">
            {this.props.moviesData.map((item) => {
              return (
                <Movie img_url={item.img_url} 
                title={item.title} 
                overview={item.overview} 
                released_on={item.released_on}
                average_votes={item.average_votes}
                total_votes={item.total_votes}
                popularity={item.popularity}
                />
              );
            })}
          </Row>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Movies;
