import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.overview}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Release Date: {this.props.released_on}
            </ListGroupItem>
            <ListGroupItem>
              Average Votes: {this.props.average_votes}
            </ListGroupItem>
            <ListGroupItem>Total Votes: {this.props.total_votes}</ListGroupItem>
            <ListGroupItem>Popularity: {this.props.popularity}</ListGroupItem>
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default Movie;
