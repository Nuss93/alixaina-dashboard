import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class EmptyHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-default pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default EmptyHeader;
