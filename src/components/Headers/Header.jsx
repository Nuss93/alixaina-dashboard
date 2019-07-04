import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-default pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col md={6}>
                  <Card body className="card-stats mb-4 mb-xl-0">
                    <Row>
                      <Col md={8}>
                        # Guests Going
                      </Col>
                      <Col md={4}>
                        {this.props.going}
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card body className="card-stats mb-4 mb-xl-0">
                    <Row>
                      <Col md={8}>
                        # Guests Not Going
                      </Col>
                      <Col md={4}>
                        {this.props.notgoing}
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
