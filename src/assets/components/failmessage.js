import React from "react";
import { Button, Modal} from "react-bootstrap";

class FailMessage extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.hideErrorMessage}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>ENCOUNTERED AN ERROR!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.error}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideErrorMessage}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FailMessage;
