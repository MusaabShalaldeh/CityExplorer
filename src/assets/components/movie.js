import React from "react";
import { Card, ListGroup, ListGroupItem,Row } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    if (this.props.moviesData) {
      return (
        <>
          <Row class='justify-content-evenly'>
            {this.props.moviesData.map((item) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.img_url}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.overview}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Release Date: {item.released_on}</ListGroupItem>
                    <ListGroupItem>Average Votes: {item.average_votes}</ListGroupItem>
                    <ListGroupItem>Total Votes: {item.total_votes}</ListGroupItem>
                    <ListGroupItem>Popularity: {item.popularity}</ListGroupItem>
                  </ListGroup>
                </Card>
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

export default Movie;
