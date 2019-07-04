import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
class ResponseDisplay extends Component {
    render() {
        const {data} = this.props
        return (
            <Row className="pt-4 pb-4 align-items-center" style={{borderTop:'1px solid rgba(0,0,0,0.2)'}}>
                <Col xs={7}>{data.name}</Col>
                <Col xs={1}>{data.pax}</Col>
                <Col className="text-right"><small>{new Date(data.timestamp).toLocaleString()}</small></Col>
            </Row>
        );
    }
}

ResponseDisplay.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ResponseDisplay;