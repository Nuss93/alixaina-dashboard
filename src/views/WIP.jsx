import React from "react";
import { Card, CardHeader, CardBody, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";
// core components
import WipHeader from "components/Headers/WipHeader.jsx";

class Plexis extends React.Component {
  state = {};
  render() {
    return (
      <>
        <WipHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          <Card body className= "shadow">
            WIP
          </Card>
        </Container>
      </>
    );
  }
}

export default Plexis;
