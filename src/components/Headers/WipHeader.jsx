import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createHashHistory } from 'history';
const history = createHashHistory();

class UserHeader extends React.Component {
  _toDash = () => {
    // preventDefault()
    history.push("/admin/index")
  }

  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-9 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/wip.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Seems like you've arrived here earlier than expected!</h1>
                <p className="text-white mt-0 mb-5">
                  Our programmers are still hard at work, so stay tuned for the next update to see if this feature has been enabled.
                </p>
                <Button
                  color="info"
                  // href="#pablo"
                  onClick={this._toDash}
                >
                  Go back to safety
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
